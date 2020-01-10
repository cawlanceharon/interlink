import { reduxListPrice } from "../../../redux/actions/index";

export const mapDispatchToProps = dispatch => {
  return {
    reduxListPrice: listPrice => dispatch(reduxListPrice(listPrice)),
  };
};
