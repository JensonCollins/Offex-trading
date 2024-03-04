import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import Logo from "@/components/ui/logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Metamask from "@/components/icons/metamask";
import { ThemeSwitch } from "@/components/themeSwitch";

export default function Navbar({className}: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 w-full mx-auto z-50 px-6", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between space-x-6">
          <Logo />
          <MenuItem setActive={setActive} active={active} item="Exchange"/>
          <MenuItem setActive={setActive} active={active} item="Pools"/>
          <MenuItem setActive={setActive} active={active} item="Dashboard"/>
        </div>
        <div className="flex items-center justify-between space-x-6">
          <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {

              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated');

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button onClick={openConnectModal} type="button">
                          Connect Wallet
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} type="button">
                          Wrong network
                        </button>
                      );
                    }

                    return (
                      <div style={{ display: 'flex', gap: 16 }}>
                        <button
                          onClick={openChainModal}
                          className="flex items-center text-[#60A5FA] text-xs"
                          type="button"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: 'hidden',
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? 'Chain icon'}
                                  src={chain.iconUrl}
                                  style={{ width: 12, height: 12 }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>

                        <button onClick={openAccountModal} type="button" className="flex items-center text-xs text-[#60A5FA]">
                          <Metamask />
                          {account.displayName}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
          <ThemeSwitch/>
        </div>
      </Menu>
    </div>
  );
}
