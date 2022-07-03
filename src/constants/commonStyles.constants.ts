import { scale, verticalScale } from '~utils/Scale';

class cmnStyle {
  static container = {
    flex: 1,
  };
  static mH(x: number) {
    return {
      marginHorizontal: scale(x),
    };
  }
  static mV(x: number) {
    return {
      marginVertical: verticalScale(x),
    };
  }
  static mT(x: number) {
    return {
      marginTop: verticalScale(x),
    };
  }
  static mB(x: number) {
    return {
      marginBottom: verticalScale(x),
    };
  }
  static mL(x: number) {
    return {
      marginLeft: scale(x),
    };
  }
  static mR(x: number) {
    return {
      marginRight: scale(x),
    };
  }
  static pH(x: number) {
    return {
      paddingHorizontal: scale(x),
    };
  }
  static pV(x: number) {
    return {
      paddingVertical: verticalScale(x),
    };
  }
  static pT(x: number) {
    return {
      paddingTop: verticalScale(x),
    };
  }
  static pB(x: number) {
    return {
      paddingBottom: verticalScale(x),
    };
  }
  static pL(x: number) {
    return {
      paddingLeft: scale(x),
    };
  }
  static pR(x: number) {
    return {
      paddingRight: scale(x),
    };
  }
  static bRs(x: number) {
    return {
      borderRadius: scale(x),
    };
  }
  static bL({ x, y }: { x: number; y: string }) {
    return {
      borderLeftWidth: scale(x),
      borderLeftColor: y,
    };
  }
  static bT({ x, y }: { x: number; y: string }) {
    return {
      borderTopWidth: scale(x),
      borderTopColor: y,
    };
  }
  static bB({ x, y }: { x: number; y: string }) {
    return {
      borderBottomWidth: scale(x),
      borderBottomColor: y,
    };
  }
  static bR({ x, y }: { x: number; y: string }) {
    return {
      borderRightWidth: scale(x),
      borderRightColor: y,
    };
  }
  static bLR({ x, y }: { x: number; y: string }) {
    return {
      borderLeftWidth: scale(x),
      borderLeftColor: y,
      borderRightWidth: scale(x),
      borderRightColor: y,
    };
  }
}

export { cmnStyle };
