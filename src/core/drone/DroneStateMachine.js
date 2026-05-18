export const DRONE_STATES = Object.freeze({
    IDLE: 'IDLE',
    AUTO_NAV: 'AUTO_NAV',
    MANUAL: 'MANUAL',
    PHOTOGRAPHING: 'PHOTOGRAPHING'
});

const VALID_STATES = new Set(Object.values(DRONE_STATES));
const KEYBOARD_INTERRUPT_STATES = new Set([
    DRONE_STATES.IDLE,
    DRONE_STATES.AUTO_NAV,
    DRONE_STATES.PHOTOGRAPHING
]);

export class DroneStateMachine {
    constructor(initialState = DRONE_STATES.IDLE) {
        this.current = initialState;
        this.onChange = null;
    }

    get state() {
        return this.current;
    }

    setState(nextState) {
        if (!VALID_STATES.has(nextState)) {
            throw new Error(`Invalid drone state: ${nextState}`);
        }

        if (this.current === nextState) {
            return false;
        }

        this.current = nextState;
        this.onChange?.(nextState);
        return true;
    }

    canKeyboardInterrupt() {
        return KEYBOARD_INTERRUPT_STATES.has(this.current);
    }
}
