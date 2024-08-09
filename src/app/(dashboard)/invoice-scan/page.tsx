import FormsWizard from 'views/forms/wizard';
import RecipeWizard from 'sections/forms/wizard/recipe-wizard';
import ScanInvoiceWizard from 'sections/forms/wizard/scan-invoice-wizard';
// ==============================|| PAGE ||============================== //



// ==============================|| PAGE ||============================== //

export default function InvoiceScanPage() {
  return (
  <>
  <FormsWizard>
    <ScanInvoiceWizard/>
  </FormsWizard>
 
  </>
  );
}
