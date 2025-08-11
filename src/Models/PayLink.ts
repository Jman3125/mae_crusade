export function GetPaymentLink(item_id:string, size:string): string | undefined {
    const baseUrl = "https://buy.stripe.com/";
    if (item_id === "item-1") {
      if (size === "S") {
        return `${baseUrl}8x28wIgaCeKX8Cy9EM77O01`;
      } else if (size === "M") {
        return `${baseUrl}00w3cof6y46j9GCaIQ77O02`;
      } else if (size === "L") {
        return `${baseUrl}cNidR21fIgT57yu3go77O03`;
      } else if (size === "XL") {
        return `${baseUrl}14A9AM3nQ32f6uq3go77O04`;
      }
    }
    // For item-2 it is a poster, so we don't need size, just one payment link
    if (item_id === "item-2") {
      return `${baseUrl}bJe8wIaQifP15qmbMU77O05`;
    }
    if (item_id === "item-3") {
      if (size === "S") {
        return `${baseUrl}dRm00c7E6dGTg506sA77O06`;
      } else if (size === "M") {
        return `${baseUrl}28E7sE0bEauH3ie6sA77O07`;
      } else if (size === "L") {
        return `${baseUrl}eVqcMYcYqfP13ie04c77O08`;
      } else if (size === "XL") {
        return `${baseUrl}dRm5kwcYq8mz5qm2ck77O09`;
      }
    }
    
}