export interface Action {
  id: string;
  title: string;
  description: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export interface Calculator extends Pick<Action, "title"> {
  id: string;
  img: any;
}

export interface Emergency extends Calculator {
  donors: number;
}

export interface Event extends Pick<Calculator, "id" | "img" | "title"> {
  subtitle: string;
}

export interface Featured extends Event {}
