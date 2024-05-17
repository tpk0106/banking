import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Thusith",
    lastName: "Kathaluwage",
    email: "thusithk@gmail.com",
    $id: "1",
    userId: "2",
    dwollaCustomerUrl: "ssssss",
    dwollaCustomerId: "11",
    address1: "51 said av",
    city: "Thornhill Park",
    state: "VIC",
    postalCode: "3335",
    dateOfBirth: "01--6-1966",
    ssn: "111111",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1234.56}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          {
            id: "3",
            name: "Savings",
            type: "visa",
            // $id: 2,
            accountId: "22",
            currentBalance: 12243.5,
            bankId: 222,
          },
          {
            id: "4",
            name: "current",

            // $id: 2,
            accountId: "27",
            currentBalance: 2300,
            bankId: 222,
          },
        ]}
      />
    </section>
  );
};

export default Home;
