import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
