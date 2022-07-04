import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

const useBridgeConfirmationStyles = createUseStyles((theme: Theme) => ({
  card: {
    width: "100%",
    maxWidth: theme.maxWidth,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1),
    [theme.breakpoints.upSm]: {
      margin: [theme.spacing(3), "auto"],
      padding: theme.spacing(3),
    },
  },
  icon: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.upSm]: {
      marginBottom: theme.spacing(2),
    },
  },
  fiat: {
    color: theme.palette.grey.dark,
    fontSize: 14,
  },
  chainsRow: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.upSm]: {
      flexDirection: "row",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
  },
  chainBox: {
    display: "flex",
    gap: theme.spacing(1),
    width: 239,
    backgroundColor: theme.palette.grey.light,
    justifyContent: "center",
    padding: theme.spacing(1.25),
    borderRadius: 56,
  },
  arrow: {
    transform: `rotate(90deg)`,
    [theme.breakpoints.upSm]: {
      transform: "none",
    },
  },
  fees: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey.light}`,
    gap: theme.spacing(1),
  },
  fee: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  betweenFees: {
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.upSm]: {
      margin: theme.spacing(6),
    },
  },
  changeButton: {
    borderRadius: 16,
    border: `${theme.palette.error.main} 1px solid`,
    backgroundColor: theme.palette.white,
    padding: [theme.spacing(1), theme.spacing(4)],
    color: theme.palette.error.main,
    fontSize: 14,
    cursor: "pointer",
  },
  contentWrapper: {
    padding: [0, theme.spacing(2)],
  },
}));

export default useBridgeConfirmationStyles;
