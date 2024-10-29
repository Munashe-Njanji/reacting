BankAccount
 ├── AccountInfo
 │   ├── AccountNumber
 │   ├── AccountHolderName
 │   ├── AccountType (Savings, Checking, etc.)
 │   ├── Balance
 │   └── InterestRate
 ├── TransactionHistory
 │   ├── TransactionList
 │   │   ├── TransactionItem
 │   │   │   ├── TransactionID
 │   │   │   ├── Date
 │   │   │   ├── Type (Deposit, Withdrawal, Transfer)
 │   │   │   ├── Amount
 │   │   │   └── BalanceAfterTransaction
 │   └── FilterTransactions
 │       ├── DateFilter
 │       ├── AmountFilter
 │       └── TypeFilter
 ├── AccountSettings
 │   ├── ChangePasswordForm
 │   ├── UpdateContactInfoForm
 │   ├── SetAccountPreferences
 │   └── EnableTwoFactorAuthentication
 ├── Alerts
 │   ├── LowBalanceAlert
 │   ├── HighBalanceAlert
 │   ├── TransactionAlert
 │   └── AccountActivityAlert
 ├── Statements
 │   ├── MonthlyStatement
 │   ├── QuarterlyStatement
 │   └── AnnualStatement
 ├── Transfers
 │   ├── InternalTransfer
 │   │   ├── TransferForm
 │   │   ├── TransferSummary
 │   │   └── TransferConfirmation
 │   ├── ExternalTransfer
 │   │   ├── ExternalTransferForm
 │   │   ├── ExternalTransferSummary
 │   │   └── ExternalTransferConfirmation
 ├── Loans
 │   ├── LoanApplication
 │   │   ├── LoanDetailsForm
 │   │   ├── LoanApprovalStatus
 │   │   └── LoanRepaymentPlan
 │   ├── LoanRepayment
 │   │   ├── RepaymentForm
 │   │   ├── RepaymentSummary
 │   │   └── RepaymentConfirmation
 ├── Investments
 │   ├── InvestmentPortfolio
 │   │   ├── InvestmentList
 │   │   ├── InvestmentDetails
 │   │   └── InvestmentPerformance
 │   ├── BuyInvestment
 │   │   ├── BuyInvestmentForm
 │   │   ├── BuyInvestmentSummary
 │   │   └── BuyInvestmentConfirmation
 │   ├── SellInvestment
 │   │   ├── SellInvestmentForm
 │   │   ├── SellInvestmentSummary
 │   │   └── SellInvestmentConfirmation
 ├── Reports
 │   ├── FinancialSummaryReport
 │   ├── SpendingReport
 │   ├── IncomeReport
 │   └── NetWorthReport
 ├── Security
 │   ├── AccountLock
 │   ├── AccountUnlock
 │   ├── FraudAlert
 │   └── SecurityAudit
