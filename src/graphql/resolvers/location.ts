import { addLocation } from './../../model/location';
export const locationMutation = {
  addLocation: (parent: any, args: { name: string; description: string }) =>
    addLocation(args),
};
