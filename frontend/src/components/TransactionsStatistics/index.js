import "./index.css";

export default function TransactionsStatistics({ statistics, monthName }) {
  return (
    <section className="transactions-statistics">
      <h2 className="statistics-title">
        Statistics - <i style={{color: 'green'}}>{monthName}</i>
      </h2><superscript>(selected month name from dropdown)</superscript>
      <div className="statistics-container">
        <div className="statistics-item">
          <p>Total Sale</p>
          <p>{statistics.sales}</p>
        </div>
        <div className="statistics-item">
          <p>Total sold items</p>
          <p>{statistics.soldItems}</p>
        </div>
        <div className="statistics-item">
          <p>Total not sold items</p>
          <p>{statistics.unSoldItems}</p>
        </div>
      </div>
    </section>
  );
}
