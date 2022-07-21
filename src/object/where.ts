import { DeepPartial } from '../models/DeepPartial';
import { comparePartial } from '../util/comparePartial';

export const where =
  <T extends object>(properties: DeepPartial<T>) =>
  (item: T) =>
    comparePartial(properties, item);
