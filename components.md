# App

## Header
   - **Logo**
   - **Navigation**
   - **UserDropdown**
      - Profile
      - Settings
      - Log Out
   - **Notifications**
      - Notification Item
         - Type (e.g., Message, Alert)
         - Status (Read/Unread)

## Sidebar
   - **QuickLinks**
      - Link Item
         - Icon
         - Label
   - **AccountOverview**
      - OverviewCard
         - Balance
         - Last Transaction
   - **ActivitySummary**
      - Recent Activity
         - Date
         - Description
         - Amount

## MainContent
   - **Dashboard**
      - **SummaryCards**
         - **AccountSummary**
            - Total Balance
            - Accounts Count
         - **TransactionSummary**
            - Recent Transactions
            - Expenditure Graph
         - **BudgetSummary**
            - Monthly Budget Overview
            - Remaining Budget
      - **FinancialGoals**
         - GoalItem
            - Target Amount
            - Progress Bar
            - Target Date
      - **UpcomingPayments**
         - PaymentItem
            - Payee
            - Amount
            - Due Date
      - **InvestmentSummary**
         - InvestmentPortfolio
            - Total Value
            - Performance Chart

   - **Accounts**
      - **AccountList**
         - AccountItem
            - Name
            - Balance
            - Type (e.g., Checking, Savings)
      - **AccountDetails**
         - **AccountInfo**
            - Account Number
            - Account Type
            - Opened Date
         - **TransactionList**
            - TransactionItem
               - Date
               - Description
               - Amount
         - **AccountAnalytics**
            - **BalanceHistory**
               - Balance Over Time Chart
            - **SpendingAnalytics**
               - Monthly Spending Breakdown
               - Categories Overview
      - **AddAccountForm**
         - Form Fields (Name, Type, Balance, etc.)
      - **EditAccountForm**
         - Form Fields (Editable Account Info)

   - **Transactions**
      - **TransactionList**
         - TransactionItem
            - Date
            - Description
            - Category
      - **TransactionDetails**
         - Detailed View of Transaction
            - Date
            - Description
            - Account
      - **AddTransactionForm**
         - Form Fields (Amount, Category, Date, Description)
      - **EditTransactionForm**
         - Editable Fields for Transaction
      - **FilterTransactions**
         - Filters (Date Range, Category, Amount)

   - **Budgeting**
      - **BudgetList**
         - BudgetItem
            - Category
            - Allocated Amount
            - Spent Amount
      - **BudgetDetails**
         - **BudgetInfo**
            - Category
            - Total Budget
         - **BudgetProgress**
            - Spent vs Allocated Graph
         - **BudgetTransactions**
            - TransactionItem
               - Linked Transactions under Budget
      - **AddBudgetForm**
         - Form Fields (Category, Amount, Duration)
      - **EditBudgetForm**
         - Editable Fields for Budget

   - **Analytics**
      - **SpendingAnalytics**
         - **CategoryBreakdown**
            - Categories Pie Chart
         - **MonthlyTrends**
            - Monthly Spending Line Graph
      - **IncomeAnalytics**
         - **SourceBreakdown**
            - Income Sources Chart
         - **MonthlyIncomeTrends**
            - Income Over Time Graph
      - **NetWorthAnalytics**
         - **AssetBreakdown**
            - Asset Distribution by Type
         - **NetWorthGrowth**
            - Growth Over Time Chart
      - **CustomReports**
         - **ReportBuilder**
            - Field Selection, Filters
         - **ReportViewer**
            - Generated Report Display

   - **Settings**
      - **ProfileSettings**
         - Editable Profile Info
      - **NotificationSettings**
         - Manage Notification Preferences
      - **SecuritySettings**
         - Two-Factor Authentication
         - Password Management
      - **IntegrationSettings**
         - Linked Accounts
         - API Tokens

## Footer
   - **Links**
      - Footer Link Item
         - Text
         - URL
   - **ContactInfo**
      - Email
      - Phone Number
      - Social Media Links
