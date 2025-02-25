import { memo, useContext } from "react";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { CurrencyContext } from "../../context";
import { currencyIconMap } from "../../utils/utils";

const CurrencySelector = () => {
  const { currency, changeCurrency } = useContext(CurrencyContext);

  const handleSelect = (currency) => {
    changeCurrency(currency);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger color="gray" variant="soft" highContrast>
        <Button>
          {currency} {currencyIconMap[currency]}
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content color="gray" variant="soft" highContrast>
        {Object.keys(currencyIconMap).map((key) => (
          <DropdownMenu.Item key={key} onSelect={() => handleSelect(key)}>
            {key} ({currencyIconMap[key]})
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default memo(CurrencySelector);
