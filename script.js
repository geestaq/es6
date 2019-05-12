class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

	reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

	print() {
		this.display.innerText = this.format(this.times);
	}

	format(times) {
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	start() {
	    if (!this.running) {
	        this.running = true;
	        this.watch = setInterval(() => this.step(), 10);
	    }
	}

	step() {
	    if (!this.running) return;
	    this.calculate();
	    this.print();
	}

	calculate() {
	    this.times.miliseconds += 1;
	    if (this.times.miliseconds >= 100) {
	        this.times.seconds += 1;
	        this.times.miliseconds = 0;
	    }
	    if (this.times.seconds >= 60) {
	        this.times.minutes += 1;
	        this.times.seconds = 0;
	    }
	}

	stop() {
	    this.running = false;
	    clearInterval(this.watch);
	}
}

//klasa listy czasow
class TimeList {
    constructor(display) {
        this.display = display;
        this.clear();
        this.print();
    }

	//czysci liste zapamietanych czasow
	clear() {
        this.items = [];
    }
	//wyswietla zapamietane czasy
	print() {
		this.display.innerHTML = '';
		this.items.forEach((item) => {
			this.display.innerHTML += `<li>${stopwatch.format(item)}</li>`;
		});
	}
	//zapisuje czas na liscie
	addItem(item) {
		this.items.push({
			minutes: item.minutes,
			seconds: item.seconds,
			miliseconds: item.miliseconds
		});
	}
}

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

const stopwatch = new Stopwatch(
	document.querySelector('.stopwatch')
);

const timeList = new TimeList(
	document.querySelector('.results')
);

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
	stopwatch.reset();
	stopwatch.print();
});

let saveButton = document.getElementById('save');
saveButton.addEventListener('click', () => {
	timeList.addItem(stopwatch.times);
	timeList.print();
});

let resetListButton = document.getElementById('resetList');
resetListButton.addEventListener('click', () => {
	timeList.clear();
	timeList.print();
});
