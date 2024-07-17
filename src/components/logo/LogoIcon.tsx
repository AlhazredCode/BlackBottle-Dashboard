// material-ui


/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * const logoIconDark = 'assets/images/logo-icon-dark.svg';
 * const logoIcon = 'assets/images/logo-icon.svg';
 * import { ThemeMode } from 'config';
 */

// ==============================|| LOGO ICON SVG ||============================== //

export default function LogoIcon() {
 

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <Image src={theme.palette.mode === ThemeMode.DARK ? logoIconDark : logoIcon} alt="Mantis" width={129} height={129} />
     *
     */
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={129}
    height={129}
    fill="none"
    
  >
    <path
      fill="#fff"
      d="M83.18 61.876c0 13.714-9.907 23.334-26.593 23.334H20.06V6.941h32.382c18.798 0 27.871 7.9 27.871 21.04 0 6.936-3.78 12.62-9.464 15.644 6.361 2.477 12.332 9.021 12.332 18.25Z"
    />
    <path
      fill="#fff"
      d="M56.561 87.244H18V4.908h34.441c26.02 0 29.906 14.47 29.906 23.074 0 6.153-2.712 11.68-7.431 15.409 5.293 3.259 10.299 9.412 10.299 18.459 0 7.43-2.66 13.766-7.718 18.328-5.11 4.641-12.358 7.066-20.936 7.066Zm-34.468-4.093h34.468c14.913 0 24.56-8.37 24.56-21.301 0-8.891-5.944-14.366-11.028-16.322l-4.146-1.616 3.937-2.112c5.24-2.816 8.37-7.978 8.37-13.844 0-15.696-14.028-19.007-25.813-19.007H22.093V83.15Z"
    />
    <path
      fill="#fff"
      d="M82.346 123.302h-38.56V40.966h34.44c26.021 0 29.906 14.47 29.906 23.074 0 6.153-2.712 11.68-7.431 15.409C105.994 82.708 111 88.86 111 97.908c0 7.43-2.66 13.766-7.718 18.329-5.136 4.641-12.358 7.065-20.936 7.065Zm-34.467-4.093h34.467c14.914 0 24.561-8.369 24.561-21.301 0-8.89-5.945-14.366-11.03-16.322l-4.145-1.616 3.937-2.112c5.241-2.816 8.37-7.978 8.37-13.844 0-15.696-14.027-19.007-25.812-19.007H47.879v74.202Z"
    />
  </svg>
  );
}
