import { delay, forkJoin, map, Observable, of } from "rxjs";

export function minimumDelay<T>(obs: Observable<T>, delayMs: number = 600): Observable<T> {
  const delayObs = of(null).pipe(delay(delayMs));
  return forkJoin([obs, delayObs]).pipe(map(([res]) => res));
}