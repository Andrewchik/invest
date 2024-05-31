import React from "react";
import classes from "./order-block.module.scss";
import QuantityInput from "./components/NumberInput/NumberInput";
import QuantityInputForLimit from "./components/NumberInputForLimit/NumberInputForLimit";

export interface OrderBlockProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const OrderBlock: React.FC<OrderBlockProps> = ({ activeTab, setActiveTab }) => {


  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={classes.orderBlock}>
      <div className={classes.tabs}>
        <div
          className={`${classes.tabMarket} ${activeTab === "Market" ? classes.active : ""}`}
          onClick={() => handleTabClick("Market")}
        >
          <p>Market</p>
        </div>
        <div
          className={`${classes.tabPending} ${activeTab === "Pending" ? classes.active : ""}`}
          onClick={() => handleTabClick("Pending")}
        >
          <p>Pending</p>
        </div>
      </div>
      <div className={classes.container}>
        {activeTab === "Market" ? (
          <div className={classes.marketBlock}>
            <div className={classes.title}>
              <p>AAPL</p>
            </div>
            <div className={classes.info}>
              <div className={classes.infoLeverage}>
                <p>Leverage:</p>
                <p>1:100</p>
              </div>
              <div className={classes.infoTrading}>
                <p>Trading:</p>
                <p>Open</p>
              </div>
            </div>
            <div className={classes.actionButtons}>
              <button className={classes.sell}>Sell</button>
              <button className={classes.buy}>Buy</button>
            </div>
            <div className={classes.price}>
              <p className={classes.priceTitle}>Price</p>
              <p className={classes.priceAmount}>168.2</p>
            </div>
            <div className={classes.volume}>
              <p className={classes.volumeTitle}>Volume</p>
              <div className={classes.volumeContainer}>
                <QuantityInput />
                <button className={classes.volumeMax}>Max</button>
              </div>
            </div>
            <div className={classes.freeMargin}>
              <p>Free Margin:</p>
              <p>0</p>
            </div>
            <div className={classes.stopLoss}>
              <p>Stop Loss</p>
              <div className={classes.stopLossInputs}>
                <input type="number" className={classes.stopLossInput} placeholder="0.00000"/>
                <input type="number" className={classes.stopLossInput} placeholder="0.00000"/>
              </div>
            </div>
            <div className={classes.takeProfit}>
              <p>Take Profit</p>
              <div className={classes.takeProfitInputs}>
                <input type="number" className={classes.takeProfitInput} placeholder="0.00000"/>
                <input type="number" className={classes.takeProfitInput} placeholder="0.00000"/>
              </div>
            </div>
            <div className={classes.confirmOrder}>
              <button className={classes.confirmOrderButton}>Confirm Order Buy</button>
            </div>
          </div>
        ) : (
          <div className={classes.pendingBlock}>
            <div className={classes.title}>
              <p>AAPL</p>
            </div>
            <div className={classes.info}>
              <div className={classes.infoLeverage}>
                <p>Leverage:</p>
                <p>1:100</p>
              </div>
              <div className={classes.infoTrading}>
                <p>Trading:</p>
                <p>Open</p>
              </div>
            </div>
            <div className={classes.actionButtonsLimit}>
              <div className={classes.first}>
                <button className={classes.sellLimit}>Sell Limit</button>
                <button className={classes.buyLimit}>Buy Limit</button>
              </div>

              <div className={classes.second}>
                <button className={classes.sellStop}>Sell Stop</button>
                <button className={classes.buyStop}>Buy Stop</button>
              </div>
            </div>
            <div className={classes.price}>
              <p className={classes.priceTitle}>Price</p>
              <div className={classes.priceContainer}>
                <QuantityInputForLimit />
              </div>
            </div>
            <div className={classes.volume}>
              <p className={classes.volumeTitle}>Volume</p>
              <div className={classes.volumeContainer}>
                <QuantityInput />
                <button className={classes.volumeMax}>Max</button>
              </div>
            </div>
            <div className={classes.freeMargin}>
              <p>Free Margin:</p>
              <p>0</p>
            </div>
            <div className={classes.stopLoss}>
              <p>Stop Loss</p>
              <div className={classes.stopLossInputs}>
                <input type="number" className={classes.stopLossInput} placeholder="0.00000"/>
                <input type="number" className={classes.stopLossInput} placeholder="0.00000"/>
              </div>
            </div>
            <div className={classes.takeProfit}>
              <p>Take Profit</p>
              <div className={classes.takeProfitInputs}>
                <input type="number" className={classes.takeProfitInput} placeholder="0.00000"/>
                <input type="number" className={classes.takeProfitInput} placeholder="0.00000"/>
              </div>
            </div>
            <div className={classes.expiryDate}>
              <p>Expiry Date</p>
              <input type="date" className={classes.expiryInput} value="24/05/2024, 18:40" readOnly />

            </div>
            <div className={classes.confirmOrder}>
              <button className={classes.confirmOrderButton}>Confirm Order Buy</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
