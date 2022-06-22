import PropTypes from "prop-types";
import css from "./Transaction.module.css";


export const TransactionHistory = ({items}) => {
    return (
    <table className={css.table}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody className={css.listTable}>

            {items.map(({id, type, amount, currency}) => {
                return (
                <tr key={id}>
                    <td className={css.itemTable}>{type}</td>
                    <td className={css.itemTable}>{amount}</td>
                    <td className={css.itemTable}>{currency}</td>
                </tr>
                )
            })}

        </tbody>
  </table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }))
};