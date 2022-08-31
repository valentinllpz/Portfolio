import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { useThemeContext } from '../../context/themeContext';

const IOSSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#1E1E1E",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M5.889 0.691607C5.97576 0.797041 6.02892 0.926071 6.0416 1.06203C6.05427 1.19798 6.02589 1.33462 5.96011 1.45427C5.44621 2.39781 5.17783 3.45542 5.17966 4.52983C5.17966 8.10405 8.09344 10.9983 11.6846 10.9983C12.153 10.9983 12.609 10.9494 13.0472 10.8561C13.1816 10.827 13.3215 10.8381 13.4495 10.888C13.5776 10.938 13.6881 11.0246 13.7672 11.1369C13.8508 11.2538 13.8934 11.395 13.8884 11.5385C13.8834 11.6821 13.8311 11.8199 13.7397 11.9307C13.0425 12.7871 12.163 13.4771 11.1653 13.9504C10.1676 14.4238 9.07684 14.6685 7.97255 14.6667C3.87477 14.6667 0.555664 11.3654 0.555664 7.29783C0.555664 4.2365 2.43478 1.61072 5.11033 0.497829C5.24361 0.441502 5.39157 0.429941 5.53197 0.464883C5.67238 0.499825 5.79766 0.579384 5.889 0.691607V0.691607Z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "#487ADA",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    width: 22,
    height: 22,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 5,
      top: 5,
      backgroundRepeat: "no-repeat",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#1E1E1E"
      )}"  d="M2.65283 15.125L3.23617 14.5417M14.3195 14.5417L14.9028 15.125M14.3195 3.45833L14.9028 2.875M3.23617 3.45833L2.65283 2.875M2.0695 9H0.902832M16.6528 9H15.4862M8.77783 15.7083V16.875M8.77783 1.125V2.29167M12.5695 9C12.5695 11.0941 10.8719 12.7917 8.77783 12.7917C6.68375 12.7917 4.98617 11.0941 4.98617 9C4.98617 6.90592 6.68375 5.20833 8.77783 5.20833C10.8719 5.20833 12.5695 6.90592 12.5695 9Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function Toogle() {
	const themeContext = useThemeContext();

  const handleChange = () => {
    themeContext.toggleTheme?.();
  };

  return <IOSSwitch sx={{ m: 1 }} defaultChecked onChange={handleChange}/>;
}
