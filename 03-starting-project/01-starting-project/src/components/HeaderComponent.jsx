import logo from "../assets/investment-calculator-logo.png";

export default function HeaderComponent() {
  return (
    <header id='header'>
      <img src={logo} alt='Investment Calclulator Logo' />
      <h1>Investment Calculator</h1>
    </header>
  );
}
