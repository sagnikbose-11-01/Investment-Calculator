# Investment Calculator

## Description

The Investment Calculator is a web application that allows users to calculate the growth of their investments over time. By inputting the initial investment, annual investment, expected return rate (in %), and duration, the calculator provides a detailed table with the investment's performance year by year.

## Features

- **Initial Investment**: The amount of money invested initially.
- **Annual Investment**: The amount of money added to the investment each year.
- **Expected Return (%)**: The annual return rate expected on the investment.
- **Duration**: The number of years the investment will be held.
- **Result Table**: Displays a table with the following headings:
  - **Year**: The year number.
  - **Investment Value**: The value of the investment at the end of each year.
  - **Interest (Year)**: The interest earned in each year.
  - **Total Interest**: The total interest accumulated over the years.
  - **Invested Capital**: The total amount of capital invested by the user up to that year.

## Technologies Used

- **React**: For building the user interface.
- **JavaScript**: For implementing the investment calculation logic.
- **CSS**: For styling the application.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/sagnikbose-11-01/Investment-Calculator.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd Investment-Calculator
    ```
3. **Install the dependencies**:
    ```sh
    npm install
    ```
4. **Start the development server**:
    ```sh
    npm run dev
    ```

## Usage

1. Open the application in your browser.
2. Enter the initial investment amount.
3. Enter the annual investment amount.
4. Enter the expected return rate (in %).
5. Enter the duration of the investment (in years).
6. View the result table to see the detailed investment performance year by year.

## Example

Here is an example of what the input fields and result table look like:

### Inputs:
- **Initial Investment**: $10,000
- **Annual Investment**: $1,000
- **Expected Return**: 7%
- **Duration**: 10 years


### Result Table:
| Year | Investment Value | Interest (Year) | Total Interest | Invested Capital |
|------|------------------|-----------------|----------------|------------------|
| 1    | $11,700          | $700            | $700           | $11,000          |
| 2    | $13,519          | $819            | $1,519         | $12,000          |
| 3    | $15,465          | $946            | $2,465         | $13,000          |
| 4    | $17,548          | $1,083          | $3,548         | $14,000          |
| 5    | $19,776          | $1,228          | $4,776         | $15,000          |
| 6    | $22,161          | $1,384          | $6,161         | $16,000          |
| 7    | $24,712          | $1,551          | $7,712         | $17,000          |
| 8    | $27,442          | $1,730          | $9,442         | $18,000          |
| 9    | $30,363          | $1,921          | $11,363        | $19,000          |
| 10   | $33,488          | $2,125          | $13,488        | $20,000          |


## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create a pull request or open an issue.
