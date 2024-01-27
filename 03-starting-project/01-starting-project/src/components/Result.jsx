import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInputValue }) {
  //   console.log(userInputValue);
  const resultsData = calculateInvestmentResults(userInputValue);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Year</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((eachYearData) => {
          const totalInterest =
            eachYearData.valueEndOfYear -
            eachYearData.annualInvestment * eachYearData.year -
            initialInvestment;

          const totalAmountInvested =
            eachYearData.valueEndOfYear - totalInterest;

          return (
            <tr key={eachYearData.year}>
              <td>{eachYearData.year}</td>
              <td>{formatter.format(eachYearData.valueEndOfYear)}</td>
              <td>{formatter.format(eachYearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
