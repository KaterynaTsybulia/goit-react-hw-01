import css from "./TransactionHistory.module.css"

export default function TransactionHistory({items}) {
    return (
            <table className={css.container}>
                <thead className={css.thead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody className={css.container}>
                {items.map(({ id, type, amount, currency }) => {
          return ( 
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                )})}
                </tbody>
            </table>
    )}