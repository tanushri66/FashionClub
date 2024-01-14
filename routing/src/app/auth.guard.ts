import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("Route", route);
  console.log("State", state);
  //business logic
  const IsUserAuthenticated = false;
  if (IsUserAuthenticated) {
    return true;
  } else {
    return false;
  }
};
