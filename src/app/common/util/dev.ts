import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription, TeardownLogic } from 'rxjs'

export function WarnMocked(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): void {
  const method = descriptor.value as (...args: any[]) => any
  let warned = false
  descriptor.value = function (...args: any[]): any {
    if (!warned) {
      console.warn(`MOCK: ${method.name}()`)
      warned = true
    }
    return method.apply(this, args)
  }
}

@Component({ template: '' })
export abstract class SelfCleaningComponent implements OnInit, OnDestroy {
  protected subscriptions = new Subscription()
  protected componentIsInitialized: boolean | null = null

  constructor() {}

  protected subscribe<T>(
    obs: Observable<T>,
    handler: (value: T) => any | void
  ): TeardownLogic {
    this.subscriptions.add(obs.subscribe(handler))
  }

  ngOnInit(): void {
    if (this.componentIsInitialized !== null) {
      this.subscriptions = new Subscription()
    }
    this.componentIsInitialized = true
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe()
    this.componentIsInitialized = false
  }
}
