// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import { useRouter } from 'next/navigation'


interface TradingViewWidgetProps {
  symbol: string | null; // Adjust the type as needed
}


function TradingViewWidget({ symbol }: TradingViewWidgetProps) {
  const container = useRef();
  const router = useRouter();

  useEffect(
    () => {

      // const selectedSymbol = symbol || 'POLONIEX:OGGYUSDT';

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${symbol}",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": true,
          "backgroundColor": "rgba(0, 0, 0, 1)",
          "gridColor": "rgba(42, 46, 57, 0.06)",
          "withdateranges": true,
          "range": "YTD",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650",
          "support_host": "https://www.tradingview.com"
        }`;
        if (container.current) {
          container.current.appendChild(script);
        }

        // Cleanup function
      return () => {
          if (container.current) {
            container.current.removeChild(script);
          }
        };
      }, []);

      return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "550px", width: "600px" , padding: '2px'}}>
          <div className="tradingview-widget-container__widget" style={{height: '550px', width: '600px'}}></div>
          {/* <div className="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
              <span className="blue-text">Track all markets on TradingView</span>
            </a>
          </div> */}
        </div>
      );
    }

export default memo(TradingViewWidget);
