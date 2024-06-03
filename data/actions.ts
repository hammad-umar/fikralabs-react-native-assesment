import RoundUpCardIcon from "../assets/icons/round-up-card-icon.svg";
import QuickDonateCardIcon from "../assets/icons/quick-donate-card-icon.svg";
import PortfolioCardIcon from "../assets/icons/portfolio-card-icon.svg";
import AutoDonateCardIcon from "../assets/icons/auto-donate-card-icon.svg";
import { Action } from "../types";

export const ACTIONS_DATA: Action[] = [
  {
    id: "1",
    title: "Round up",
    description: "$25 Round Up Last Month",
    Icon: RoundUpCardIcon,
  },
  {
    id: "2",
    title: "Quick Donate",
    description: "5 Days Since Last Donation",
    Icon: QuickDonateCardIcon,
  },
  {
    id: "3",
    title: "Akhirah Portfolio",
    description: "5 Campaigns Supported",
    Icon: PortfolioCardIcon,
  },
  {
    id: "4",
    title: "Auto Donate",
    description: "Next donation: Palestine Relief",
    Icon: AutoDonateCardIcon,
  },
];
