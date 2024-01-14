import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (_route, _state) => {
  
  console.log("state ", _state);
  //we can write business logic

  const isUserAuthenticated = false;
  if (isUserAuthenticated) {
    return true
  } else {
    return false;
  }
};
