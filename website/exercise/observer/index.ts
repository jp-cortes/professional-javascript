interface Observer {
    update: (data: any) => void;
}

interface Subject {
    subscribe: (observer :Observer) => void;
    unsubscribe: (observer :Observer) => void;
}

class BitcoinPrice implements Subject {
    observers: Observer[] = [];
    
    constructor() {
        const element = document.querySelector('#value') as HTMLInputElement;
        element.addEventListener('input', () => {
            this.notify(element.value);
        });

    }

    subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer;
        });

        this.observers.splice(index, 1);
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class priceDisplay implements Observer {
    private element: HTMLElement;
    
    constructor() {
        this.element = document.querySelector('#price') as HTMLElement;
    }

    update(data: any) {
        this.element.innerText = data;
    }
}
const value = new BitcoinPrice();
const display = new priceDisplay();
value.subscribe(display);

setTimeout(() => value.unsubscribe(display), 5000)