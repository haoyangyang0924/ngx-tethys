import { ConnectionPositionPair } from '@angular/cdk/overlay';

export const POSITION_MAP: { [key: string]: ConnectionPositionPair } = ({
    top: {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    topCenter: {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    topLeft: {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    topRight: {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    right: {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center'
    },
    rightTop: {
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top'
    },
    rightBottom: {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    bottom: {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top'
    },
    bottomCenter: {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top'
    },
    bottomLeft: {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
    },
    bottomRight: {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
    },
    left: {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center'
    },
    leftTop: {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'top'
    },
    leftBottom: {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'bottom'
    }
} as {}) as { [key: string]: ConnectionPositionPair };

export const EXPANDED_DROPDOWN_POSITIONS = [
    POSITION_MAP.bottomLeft,
    POSITION_MAP.bottomRight,
    POSITION_MAP.topLeft,
    POSITION_MAP.topRight
];

export function getFlexiblePosition(key: string): ConnectionPositionPair[] {
    let reApply: ConnectionPositionPair[] = [];
    switch (key) {
        case 'top':
            reApply = [POSITION_MAP['bottom']];
            break;
        case 'right':
            reApply = [POSITION_MAP['left']];
            break;
        case 'bottom':
            reApply = [POSITION_MAP['top']];
            break;
        case 'left':
            reApply = [POSITION_MAP['right']];
            break;
    }
    return [POSITION_MAP[key], ...reApply];
}

export function getKeyByPosition(position: ConnectionPositionPair) {
    for (const key in POSITION_MAP) {
        if (POSITION_MAP[key] === position) {
            return key;
        }
    }
}
