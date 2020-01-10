import { reduxDashboard } from "../../redux/actions/index";

export const mapDispatchToProps = dispatch => {
  return {
    reduxDashboard: dashboard => dispatch(reduxDashboard(dashboard)),
  };
};
