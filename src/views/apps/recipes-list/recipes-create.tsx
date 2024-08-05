'use client';

import Image from 'next/legacy/image';
import { useRouter } from 'next/navigation';

// material-ui
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third party
import * as yup from 'yup';
import { v4 as UIDV4 } from 'uuid';
import { format } from 'date-fns';
import { FieldArray, Form, Formik } from 'formik';

// project import
import MainCard from 'components/MainCard';
import CircularLoader from 'components/CircularLoader';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

import InvoiceItem from 'sections/apps/invoice/InvoiceItem';
import AddressModal from 'sections/apps/invoice/AddressModal';
import InvoiceModal from 'sections/apps/invoice/InvoiceModal';

import { APP_DEFAULT_PATH } from 'config';
import incrementer from 'utils/incrementer';
import { openSnackbar } from 'api/snackbar';

import {
    handlerCustomerTo,
    handlerCustomerFrom,
    handlerPreview,
    insertInvoice,
    selectCountry,
    useGetInvoice,
    useGetInvoiceMaster
} from 'api/invoice';

// assets
import EditOutlined from '@ant-design/icons/EditOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';

// types
import { SnackbarProps } from 'types/snackbar';
import { CountryType, InvoiceList, InvoiceProps } from 'types/invoice';

const validationSchema = yup.object({
    date: yup.date().required('Invoice date is required'),
    due_date: yup
        .date()
        .when('date', (date, schema) => date && schema.min(date, "Due date can't be before invoice date"))
        .nullable()
        .required('Due date is required'),
    customerInfo: yup
        .object({
            name: yup.string().required('Invoice receiver information is required')
        })
        .required('Invoice receiver information is required'),
    status: yup.string().required('Status selection is required'),
    invoice_detail: yup
        .array()
        .required('Invoice details is required')
        .of(
            yup.object().shape({
                name: yup.string().required('Product name is required')
            })
        )
        .min(1, 'Invoice must have at least 1 items')
});

// ==============================|| INVOICE CREATE - FORM ||============================== //

interface FormProps {
    lists: InvoiceList[];
    invoiceMaster: InvoiceProps;
}

function CreateForm({ lists, invoiceMaster }: FormProps) {
    const router = useRouter();
    const nombres = ['Nombre 1', 'Nombre 2', 'Nombre 3'];
    const notesLimit: number = 500;

    const handlerCreate = (values: any) => {
        const newList: InvoiceList = {
            id: Number(incrementer(lists.length)),
            invoice_id: Number(values.invoice_id),
            customer_name: values.cashierInfo?.name,
            email: values.cashierInfo?.email,
            avatar: Number(Math.round(Math.random() * 10)),
            discount: Number(values.discount),
            tax: Number(values.tax),
            date: format(new Date(values.date), 'MM/dd/yyyy'),
            due_date: format(new Date(values.due_date), 'MM/dd/yyyy'),
            quantity: Number(
                values.invoice_detail?.reduce((sum: any, i: any) => {
                    return sum + i.qty;
                }, 0)
            ),
            status: values.status,
            cashierInfo: values.cashierInfo,
            customerInfo: values.customerInfo,
            invoice_detail: values.invoice_detail,
            notes: values.notes
        };

        insertInvoice(newList);
        openSnackbar({
            open: true,
            message: 'Invoice Added successfully',
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
            variant: 'alert',
            alert: {
                color: 'success'
            }
        } as SnackbarProps);
        router.push('/apps/invoice/list');
    };

    return (
        <Formik
            initialValues={{
                id: 120,
                invoice_id: Date.now(),
                status: '',
                date: new Date(),
                due_date: null,
                cashierInfo: {
                    name: 'Belle J. Richter',
                    address: '1300 Cooks Mine, NM 87829',
                    phone: '305-829-7809',
                    email: 'belljrc23@gmail.com'
                },
                customerInfo: {
                    address: '',
                    email: '',
                    name: '',
                    phone: ''
                },
                invoice_detail: [
                    {
                        id: UIDV4(),
                        name: '',
                        description: '',
                        qty: 1,
                        price: '1.00'
                    }
                ],
                discount: 0,
                tax: 0,
                notes: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                handlerCreate(values);
            }}
        >
            {({ handleBlur, errors, handleChange, handleSubmit, values, isValid, setFieldValue, touched }) => {
                const subtotal = values?.invoice_detail.reduce((prev, curr: any) => {
                    if (curr.name.trim().length > 0) return prev + Number(curr.price * Math.floor(curr.qty));
                    else return prev;
                }, 0);
                const taxRate = (values.tax * subtotal) / 100;
                const discountRate = (values.discount * subtotal) / 100;
                const total = subtotal - discountRate + taxRate;
                return (
                    <Form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>


                            <Grid item xs={12}>
                                <Typography variant="h5">Detail</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FieldArray
                                    name="invoice_detail"
                                    render={({ remove, push }) => {
                                        return (
                                            <>
                                                <TableContainer>
                                                    <Table sx={{ minWidth: 650 }}>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>#</TableCell>
                                                                <TableCell>Name</TableCell>

                                                                <TableCell>Units</TableCell>
                                                                <TableCell>Price</TableCell>
                                                                <TableCell align="right">QTY</TableCell>
                                                                <TableCell align="right">Total</TableCell>
                                                                <TableCell align="center">Action</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {values.invoice_detail?.map((item: any, index: number) => (
                                                                <TableRow key={item.id}>
                                                                    <TableCell>{values.invoice_detail.indexOf(item) + 1}</TableCell>
                                                                    <InvoiceItem
                                                                        key={item.id}
                                                                        id={item.id}
                                                                        index={index}
                                                                        name={item.name}
                                                                        description={item.description}
                                                                        qty={item.qty}
                                                                        price={item.price}
                                                                        onDeleteItem={(index: number) => remove(index)}
                                                                        onEditItem={handleChange}
                                                                        Blur={handleBlur}
                                                                        errors={errors}
                                                                        touched={touched}
                                                                    />
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                                <Divider />
                                                {touched.invoice_detail && errors.invoice_detail && !Array.isArray(errors?.invoice_detail) && (
                                                    <Stack direction="row" justifyContent="center" sx={{ p: 1.5 }}>
                                                        <FormHelperText error={true}>{errors.invoice_detail as string}</FormHelperText>
                                                    </Stack>
                                                )}
                                                <Grid container justifyContent="space-between">
                                                    <Grid item xs={12} md={8}>
                                                        <Box sx={{ pt: 2.5, pr: 2.5, pb: 2.5, pl: 0 }}>
                                                            <Button
                                                                color="primary"
                                                                startIcon={<PlusOutlined />}
                                                                onClick={() =>
                                                                    push({
                                                                        id: UIDV4(),
                                                                        name: '',
                                                                        description: '',
                                                                        qty: 1,
                                                                        price: '1.00'
                                                                    })
                                                                }
                                                                variant="dashed"
                                                                sx={{ bgcolor: 'transparent !important' }}
                                                            >
                                                                Add Item
                                                            </Button>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>

                                                        <Grid item xs={12}>

                                                            <Stack spacing={1} sx={{my:4}}>
                                                                <InputLabel>Set Menu*</InputLabel>
                                                                <FormControl sx={{ width: { xs: '100%', sm: 200 } }}>
                                                                    <Autocomplete
                                                                        id="country-select-demo"
                                                                        fullWidth
                                                                        // Usamos el array de nombres para las opciones
                                                                        options={nombres}
                                                                        // Valor por defecto (opcional)
                                                                        defaultValue={nombres[0]}
                                                                        // Eliminamos la lógica del onChange por ahora
                                                                        // onChange={(event, value) => selectCountry(value)}
                                                                        renderInput={(params) => (
                                                                            <TextField
                                                                                {...params}
                                                                                name="nombres"
                                                                                placeholder="Select"
                                                                                // Eliminamos los adornos del TextField
                                                                                InputProps={{
                                                                                    ...params.InputProps,
                                                                                    startAdornment: null
                                                                                }}
                                                                            />
                                                                        )}
                                                                    />
                                                                </FormControl>
                                                            </Stack>
                                                            <Stack spacing={2}>
                                                                <Stack direction="row" justifyContent="space-between">
                                                                    <Typography color="grey.500">Item Total:</Typography>
                                                                    <Typography>{invoiceMaster.country?.prefix + '' + subtotal.toFixed(2)}</Typography>
                                                                </Stack>
                                                                <Stack direction="row" justifyContent="space-between">
                                                                    <Typography color="grey.500">Final Price</Typography>
                                                                    <Typography variant="h6" color="success.main">
                                                                        {invoiceMaster.country?.prefix + '' + discountRate.toFixed(2)}
                                                                    </Typography>
                                                                </Stack>

                                                                <Stack direction="row" justifyContent="space-between">
                                                                    <Typography variant="subtitle1">Earnings:</Typography>
                                                                    <Typography variant="subtitle1">
                                                                        {total % 1 === 0
                                                                            ? invoiceMaster.country?.prefix + '' + total
                                                                            : invoiceMaster.country?.prefix + '' + total.toFixed(2)}
                                                                    </Typography>
                                                                </Stack>
                                                            </Stack>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </>
                                        );
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                            </Grid>

                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel>Notes</InputLabel>
                                    <TextField
                                        placeholder="Address"
                                        rows={3}
                                        value={values.notes}
                                        multiline
                                        name="notes"
                                        onChange={handleChange}
                                        inputProps={{
                                            maxLength: notesLimit
                                        }}
                                        helperText={`${values.notes.length} / ${notesLimit}`}
                                        sx={{
                                            width: '100%',
                                            '& .MuiFormHelperText-root': {
                                                mr: 0,
                                                display: 'flex',
                                                justifyContent: 'flex-end'
                                            }
                                        }}
                                    />
                                </Stack>
                            </Grid>


                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    );
}

// ==============================|| INVOICE - CREATE ||============================== //

export default function CreateRecipe() {
    const { invoice } = useGetInvoice();
    const { invoiceMasterLoading, invoiceMaster } = useGetInvoiceMaster();

    const isLoader = invoiceMasterLoading || invoiceMaster === undefined;
    const loader = (
        <Box sx={{ height: 'calc(100vh - 310px)' }}>
            <CircularLoader />
        </Box>
    );

    let breadcrumbLinks = [
        { title: 'Home', to: APP_DEFAULT_PATH },
        { title: 'Invoice', to: '/apps/invoice/dashboard' },
        { title: 'Create Invoice' }
    ];

    return (
        <>
            <MainCard>{isLoader ? loader : <CreateForm {...{ lists: invoice, invoiceMaster }} />}</MainCard>
        </>
    );
}
