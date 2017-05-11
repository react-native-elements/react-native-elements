!(function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  (t.m = e), (t.c = n), (t.i = function(e) {
    return e;
  }), (t.d = function(e, n, r) {
    t.o(e, n) ||
      Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
  }), (t.n = function(e) {
    var n = e && e.__esModule
      ? function() {
          return e.default;
        }
      : function() {
          return e;
        };
    return t.d(n, 'a', n), n;
  }), (t.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }), (t.p = ''), t((t.s = 40));
})([
  function(e, t) {
    e.exports = react - native;
  },
  function(e, t) {
    e.exports = react;
  },
  function(e, t, n) {
    (function(t) {
      if ('production' !== t.env.NODE_ENV) {
        var r =
          ('function' == typeof Symbol &&
            Symbol.for &&
            Symbol.for('react.element')) ||
          60103,
          o = function(e) {
            return 'object' == typeof e && null !== e && e.$$typeof === r;
          };
        e.exports = n(44)(o, !0);
      } else e.exports = n(43)();
    }.call(t, n(8)));
  },
  function(e, t) {
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = {
      primary: '#9E9E9E',
      primary1: '#4d86f7',
      primary2: '#6296f9',
      secondary: '#8F0CE8',
      secondary2: '#00B233',
      secondary3: '#00FF48',
      grey0: '#393e42',
      grey1: '#43484d',
      grey2: '#5e6977',
      grey3: '#86939e',
      grey4: '#bdc6cf',
      grey5: '#e1e8ee',
      dkGreyBg: '#232323',
      greyOutline: '#cbd2d9',
      searchBg: '#303337',
      disabled: '#dadee0',
      white: '#ffffff',
      error: '#ff190c',
    });
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(6),
      f = r(d),
      p = n(5),
      y = r(p),
      h = s.StyleSheet.create({
        text: a(
          {},
          s.Platform.select({ android: a({}, f.default.android.regular) })
        ),
        bold: a(
          {},
          s.Platform.select({ android: a({}, f.default.android.bold) })
        ),
      }),
      m = function(e) {
        var t = e.style,
          n = e.children,
          r = e.h1,
          i = e.h2,
          l = e.h3,
          u = e.h4,
          d = e.fontFamily,
          f = o(e, ['style', 'children', 'h1', 'h2', 'h3', 'h4', 'fontFamily']);
        return c.default.createElement(
          s.Text,
          a(
            {
              style: [
                h.text,
                r && { fontSize: (0, y.default)(40) },
                i && { fontSize: (0, y.default)(34) },
                l && { fontSize: (0, y.default)(28) },
                u && { fontSize: (0, y.default)(22) },
                r && h.bold,
                i && h.bold,
                l && h.bold,
                u && h.bold,
                d && { fontFamily: d },
                t && t,
              ],
            },
            f
          ),
          n
        );
      };
    (m.propTypes = {
      style: l.default.any,
      h1: l.default.bool,
      h2: l.default.bool,
      h3: l.default.bool,
      h4: l.default.bool,
      fontFamily: l.default.string,
      children: l.default.any,
    }), (t.default = m);
  },
  function(e, t, n) {
    var r = n(0),
      o = r.PixelRatio,
      a = r.Dimensions,
      i = o.get(),
      l = a.get('window').height,
      u = a.get('window').width,
      c = function(e) {
        return 2 === i
          ? u < 360
              ? 0.95 * e
              : l < 667 ? e : l >= 667 && l <= 735 ? 1.15 * e : 1.25 * e
          : 3 === i
              ? u <= 360
                  ? e
                  : l < 667
                      ? 1.15 * e
                      : l >= 667 && l <= 735 ? 1.2 * e : 1.27 * e
              : 3.5 === i
                  ? u <= 360
                      ? e
                      : l < 667
                          ? 1.2 * e
                          : l >= 667 && l <= 735 ? 1.25 * e : 1.4 * e
                  : e;
      };
    e.exports = c;
  },
  function(e, t) {
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = {
      ios: {},
      android: {
        regular: { fontFamily: 'sans-serif' },
        light: { fontFamily: 'sans-serif-light' },
        condensed: { fontFamily: 'sans-serif-condensed' },
        condensed_light: {
          fontFamily: 'sans-serif-condensed',
          fontWeight: 'light',
        },
        black: { fontFamily: 'sans-serif', fontWeight: 'bold' },
        thin: { fontFamily: 'sans-serif-thin' },
        medium: { fontFamily: 'sans-serif-medium' },
        bold: { fontFamily: 'sans-serif', fontWeight: 'bold' },
      },
    });
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(9),
      f = r(d),
      p = function(e) {
        var t = e.type,
          n = e.name,
          r = e.size,
          i = e.color,
          l = e.iconStyle,
          u = e.component,
          d = e.underlayColor,
          p = e.reverse,
          h = e.raised,
          m = e.containerStyle,
          g = e.reverseColor,
          b = e.onPress,
          v = o(e, [
            'type',
            'name',
            'size',
            'color',
            'iconStyle',
            'component',
            'underlayColor',
            'reverse',
            'raised',
            'containerStyle',
            'reverseColor',
            'onPress',
          ]),
          S = s.View;
        b && (S = s.TouchableHighlight), u && (S = u);
        var w = void 0;
        return (w = t
          ? (0, f.default)(t)
          : (0, f.default)('material')), c.default.createElement(
          S,
          a(
            {
              underlayColor: p ? i : d || i,
              style: [
                (p || h) && y.button,
                (p || h) && {
                  borderRadius: r + 4,
                  height: 2 * r + 4,
                  width: 2 * r + 4,
                },
                h && y.raised,
                {
                  backgroundColor: p ? i : h ? 'white' : 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                m && m,
              ],
              onPress: b,
            },
            v
          ),
          c.default.createElement(w, {
            style: [{ backgroundColor: 'transparent' }, l && l],
            size: r,
            name: n,
            color: p ? g : i,
          })
        );
      };
    (p.propTypes = {
      type: l.default.string,
      name: l.default.string,
      size: l.default.number,
      color: l.default.string,
      component: l.default.element,
      underlayColor: l.default.string,
      reverse: l.default.bool,
      raised: l.default.bool,
      containerStyle: s.View.propTypes.style,
      iconStyle: s.Text.propTypes.style,
      onPress: l.default.func,
      reverseColor: l.default.string,
    }), (p.defaultProps = {
      underlayColor: 'white',
      reverse: !1,
      raised: !1,
      size: 24,
      color: 'black',
      reverseColor: 'white',
    });
    var y = s.StyleSheet.create({
      button: { margin: 7 },
      raised: a(
        {},
        s.Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
          },
          android: { elevation: 2 },
        })
      ),
    });
    t.default = p;
  },
  function(e, t) {
    function n() {
      throw new Error('setTimeout has not been defined');
    }
    function r() {
      throw new Error('clearTimeout has not been defined');
    }
    function o(e) {
      if (s === setTimeout) return setTimeout(e, 0);
      if ((s === n || !s) && setTimeout)
        return (s = setTimeout), setTimeout(e, 0);
      try {
        return s(e, 0);
      } catch (t) {
        try {
          return s.call(null, e, 0);
        } catch (t) {
          return s.call(this, e, 0);
        }
      }
    }
    function a(e) {
      if (d === clearTimeout) return clearTimeout(e);
      if ((d === r || !d) && clearTimeout)
        return (d = clearTimeout), clearTimeout(e);
      try {
        return d(e);
      } catch (t) {
        try {
          return d.call(null, e);
        } catch (t) {
          return d.call(this, e);
        }
      }
    }
    function i() {
      h &&
        p &&
        ((h = !1), p.length ? (y = p.concat(y)) : (m = -1), y.length && l());
    }
    function l() {
      if (!h) {
        var e = o(i);
        h = !0;
        for (var t = y.length; t; ) {
          for ((p = y), (y = []); ++m < t; )
            p && p[m].run();
          (m = -1), (t = y.length);
        }
        (p = null), (h = !1), a(e);
      }
    }
    function u(e, t) {
      (this.fun = e), (this.array = t);
    }
    function c() {}
    var s, d, f = (e.exports = {});
    !(function() {
      try {
        s = 'function' == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        s = n;
      }
      try {
        d = 'function' == typeof clearTimeout ? clearTimeout : r;
      } catch (e) {
        d = r;
      }
    })();
    var p, y = [], h = !1, m = -1;
    (f.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
      y.push(new u(e, t)), 1 !== y.length || h || o(l);
    }), (u.prototype.run = function() {
      this.fun.apply(null, this.array);
    }), (f.title = 'browser'), (f.browser = !0), (f.env = {}), (f.argv = [
    ]), (f.version = ''), (f.versions = {
    }), (f.on = c), (f.addListener = c), (f.once = c), (f.off = c), (f.removeListener = c), (f.removeAllListeners = c), (f.emit = c), (f.binding = function(
      e
    ) {
      throw new Error('process.binding is not supported');
    }), (f.cwd = function() {
      return '/';
    }), (f.chdir = function(e) {
      throw new Error('process.chdir is not supported');
    }), (f.umask = function() {
      return 0;
    });
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = n(53),
      a = r(o),
      i = n(51),
      l = r(i),
      u = n(13),
      c = r(u),
      s = n(50),
      d = r(s),
      f = n(49),
      p = r(f),
      y = n(48),
      h = r(y),
      m = n(47),
      g = r(m),
      b = n(46),
      v = r(b),
      S = n(12),
      w = r(S),
      T = n(52),
      O = r(T);
    t.default = function(e) {
      switch (e) {
        case 'zocial':
          return a.default;
        case 'octicon':
          return l.default;
        case 'material':
          return c.default;
        case 'material-community':
          return d.default;
        case 'ionicon':
          return p.default;
        case 'foundation':
          return h.default;
        case 'evilicon':
          return g.default;
        case 'entypo':
          return v.default;
        case 'font-awesome':
          return w.default;
        case 'simple-line-icon':
          return O.default;
        default:
          return c.default;
      }
    };
  },
  function(e, t, n) {
    'use strict';
    function r(e) {
      return function() {
        return e;
      };
    }
    var o = function() {};
    (o.thatReturns = r), (o.thatReturnsFalse = r(!1)), (o.thatReturnsTrue = r(
      !0
    )), (o.thatReturnsNull = r(null)), (o.thatReturnsThis = function() {
      return this;
    }), (o.thatReturnsArgument = function(e) {
      return e;
    }), (e.exports = o);
  },
  function(e, t, n) {
    'use strict';
    (function(t) {
      function n(e, t, n, o, a, i, l, u) {
        if ((r(t), !e)) {
          var c;
          if (void 0 === t)
            c = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var s = [n, o, a, i, l, u], d = 0;
            (c = new Error(
              t.replace(/%s/g, function() {
                return s[d++];
              })
            )), (c.name = 'Invariant Violation');
          }
          throw ((c.framesToPop = 1), c);
        }
      }
      var r = function(e) {};
      'production' !== t.env.NODE_ENV &&
        (r = function(e) {
          if (void 0 === e)
            throw new Error('invariant requires an error message argument');
        }), (e.exports = n);
    }.call(t, n(8)));
  },
  function(e, t) {
    e.exports = react - native - vector - icons / FontAwesome;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / MaterialIcons;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(3),
      f = r(d),
      p = function(e) {
        var t = e.containerStyle,
          n = e.textStyle,
          r = e.wrapperStyle,
          i = e.onPress,
          l = e.component,
          u = e.value,
          d = e.children,
          f = e.element,
          p = o(e, [
            'containerStyle',
            'textStyle',
            'wrapperStyle',
            'onPress',
            'component',
            'value',
            'children',
            'element',
          ]);
        if (f) return f;
        var h = s.View,
          m = c.default.createElement(s.Text, { style: [y.text, n && n] }, u);
        return d && (m = d), d &&
          u &&
          console.error(
            'Badge can only contain either child element or value'
          ), !l && i && (h = s.TouchableOpacity), c.default.isValidElement(l) &&
          (h = l), c.default.createElement(
          s.View,
          { style: [y.container && r && r] },
          c.default.createElement(
            h,
            a({ style: [y.badge, t && t], onPress: i }, p),
            m
          )
        );
      };
    p.propTypes = {
      containerStyle: s.View.propTypes.style,
      wrapperStyle: s.View.propTypes.style,
      textStyle: s.Text.propTypes.style,
      children: l.default.element,
      value: l.default.oneOfType([l.default.string, l.default.number]),
      onPress: l.default.func,
      component: l.default.func,
      element: l.default.element,
    };
    var y = s.StyleSheet.create({
      container: { flexDirection: 'row' },
      badge: {
        padding: 12,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: f.default.grey1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: { fontSize: 14, color: 'white' },
    });
    t.default = p;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(3),
      f = r(d),
      p = n(4),
      y = r(p),
      h = n(13),
      m = r(h),
      g = n(9),
      b = r(g),
      v = n(5),
      S = r(v),
      w = function() {
        console.log('please attach method to this component');
      },
      T = function(e) {
        var t = e.disabled,
          n = e.loading,
          r = e.loadingRight,
          i = e.activityIndicatorStyle,
          l = e.buttonStyle,
          u = e.borderRadius,
          d = e.title,
          p = e.onPress,
          h = e.icon,
          g = e.iconComponent,
          v = e.secondary,
          S = e.secondary2,
          T = e.secondary3,
          C = e.primary1,
          x = e.primary2,
          P = e.backgroundColor,
          E = e.color,
          I = e.fontSize,
          _ = e.underlayColor,
          j = e.raised,
          k = e.textStyle,
          V = e.large,
          R = e.iconRight,
          z = e.fontWeight,
          M = e.disabledStyle,
          F = e.fontFamily,
          B = o(e, [
            'disabled',
            'loading',
            'loadingRight',
            'activityIndicatorStyle',
            'buttonStyle',
            'borderRadius',
            'title',
            'onPress',
            'icon',
            'iconComponent',
            'secondary',
            'secondary2',
            'secondary3',
            'primary1',
            'primary2',
            'backgroundColor',
            'color',
            'fontSize',
            'underlayColor',
            'raised',
            'textStyle',
            'large',
            'iconRight',
            'fontWeight',
            'disabledStyle',
            'fontFamily',
          ]),
          L = e.Component,
          A = void 0;
        if (h) {
          var W = void 0;
          (W =
            g ||
            (h.type
              ? (0, b.default)(h.type)
              : m.default)), (A = c.default.createElement(
            W,
            a(
              {
                color: h.color || 'white',
                size: h.size || (V ? 26 : 18),
                style: [R ? O.iconRight : O.icon, h.style && h.style],
              },
              h
            )
          ));
        }
        var D = void 0;
        return n &&
          (D = c.default.createElement(s.ActivityIndicator, {
            animating: !0,
            style: [O.activityIndicatorStyle, i],
            color: E || 'white',
            size: (V && 'large') || 'small',
          })), L || 'ios' !== s.Platform.OS || (L = s.TouchableHighlight), L ||
          'android' !== s.Platform.OS ||
          (L = s.TouchableNativeFeedback), L ||
          (L = s.TouchableHighlight), c.default.createElement(
          L,
          a(
            {
              underlayColor: _ || 'transparent',
              onPress: p || w,
              disabled: t || !1,
            },
            B
          ),
          c.default.createElement(
            s.View,
            {
              style: [
                O.button,
                v && { backgroundColor: f.default.secondary },
                S && { backgroundColor: f.default.secondary2 },
                T && { backgroundColor: f.default.secondary3 },
                C && { backgroundColor: f.default.primary1 },
                x && { backgroundColor: f.default.primary2 },
                P && { backgroundColor: P },
                u && { borderRadius: u },
                j && O.raised,
                !V && O.small,
                l && l,
                t && { backgroundColor: f.default.disabled },
                t && M && M,
              ],
            },
            h && !R && A,
            n && !r && D,
            c.default.createElement(
              y.default,
              {
                style: [
                  O.text,
                  E && { color: E },
                  !V && O.smallFont,
                  I && { fontSize: I },
                  k && k,
                  z && { fontWeight: z },
                  F && { fontFamily: F },
                ],
              },
              d
            ),
            n && r && D,
            h && R && A
          )
        );
      };
    T.propTypes = {
      buttonStyle: s.View.propTypes.style,
      title: l.default.string,
      onPress: l.default.any,
      icon: l.default.object,
      secondary: l.default.bool,
      secondary2: l.default.bool,
      secondary3: l.default.bool,
      primary1: l.default.bool,
      primary2: l.default.bool,
      backgroundColor: l.default.string,
      color: l.default.string,
      fontSize: l.default.any,
      underlayColor: l.default.string,
      raised: l.default.bool,
      textStyle: s.Text.propTypes.style,
      disabled: l.default.bool,
      loading: l.default.bool,
      activityIndicatorStyle: s.View.propTypes.style,
      loadingRight: l.default.bool,
      Component: l.default.any,
      borderRadius: l.default.number,
      large: l.default.bool,
      iconRight: l.default.bool,
      fontWeight: l.default.string,
      disabledStyle: s.View.propTypes.style,
      fontFamily: l.default.string,
    };
    var O = s.StyleSheet.create({
      button: {
        padding: 19,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: f.default.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      text: { color: 'white', fontSize: (0, S.default)(16) },
      icon: { marginRight: 10 },
      iconRight: { marginLeft: 10 },
      small: { padding: 12 },
      smallFont: { fontSize: (0, S.default)(14) },
      activityIndicatorStyle: { marginHorizontal: 10, height: 0 },
      raised: a(
        {},
        s.Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
          },
          android: { elevation: 2 },
        })
      ),
    });
    t.default = T;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = n(1),
      a = r(o),
      i = n(0),
      l = n(3),
      u = r(l),
      c = {},
      s = function(e) {
        var t = e.style;
        return a.default.createElement(i.View, {
          style: [c.container, t && t],
        });
      };
    (s.propTypes = {
      style: i.View.propTypes.style,
    }), (c = i.StyleSheet.create({
      container: { height: 1, backgroundColor: u.default.grey5 },
    })), (t.default = s);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      a = n(2),
      i = r(a),
      l = n(1),
      u = r(l),
      c = n(0),
      s = function(e) {
        var t = e.containerStyle,
          n = e.size,
          r = e.onPress,
          a = e.activeOpacity,
          i = c.StyleSheet.create({
            container: {
              flex: n || (t && t.height ? 0 : 1),
              flexDirection: 'row',
            },
          });
        return r
          ? u.default.createElement(
              c.TouchableOpacity,
              { style: [i.container, t && t], activeOpacity: a, onPress: r },
              u.default.createElement(c.View, e, e.children)
            )
          : u.default.createElement(
              c.View,
              o({ style: [i.container, t && t] }, e),
              e.children
            );
      };
    (s.propTypes = {
      size: i.default.number,
      containerStyle: i.default.any,
      onPress: i.default.func,
      activeOpacity: i.default.number,
      children: i.default.any,
    }), (s.defaultProps = { activeOpacity: 1 }), (t.default = s);
  },
  function(e, t, n) {
    'use strict';
    (function(t) {
      var r = n(10), o = r;
      'production' !== t.env.NODE_ENV &&
        (function() {
          var e = function(e) {
            for (
              var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            var o = 0,
              a =
                'Warning: ' +
                e.replace(/%s/g, function() {
                  return n[o++];
                });
            'undefined' != typeof console && console.error(a);
            try {
              throw new Error(a);
            } catch (e) {}
          };
          o = function(t, n) {
            if (void 0 === n)
              throw new Error(
                '`warning(condition, format, ...args)` requires a warning message argument'
              );
            if (0 !== n.indexOf('Failed Composite propType: ') && !t) {
              for (
                var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), a = 2;
                a < r;
                a++
              )
                o[a - 2] = arguments[a];
              e.apply(void 0, [n].concat(o));
            }
          };
        })(), (e.exports = o);
    }.call(t, n(8)));
  },
  function(e, t, n) {
    'use strict';
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  function(e, t) {
    e.exports = react - native - tab - navigator;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(7),
      f = r(d),
      p = n(4),
      y = r(p),
      h = function(e) {
        var t = e.component,
          n = e.onPress,
          r = e.onLongPress,
          i = e.containerStyle,
          l = e.icon,
          u = e.iconStyle,
          d = e.source,
          p = e.small,
          h = e.medium,
          m = e.large,
          g = e.xlarge,
          b = e.avatarStyle,
          v = e.rounded,
          S = e.title,
          w = e.titleStyle,
          T = e.overlayContainerStyle,
          O = e.activeOpacity,
          C = o(e, [
            'component',
            'onPress',
            'onLongPress',
            'containerStyle',
            'icon',
            'iconStyle',
            'source',
            'small',
            'medium',
            'large',
            'xlarge',
            'avatarStyle',
            'rounded',
            'title',
            'titleStyle',
            'overlayContainerStyle',
            'activeOpacity',
          ]),
          x = e.width,
          P = e.height;
        p
          ? ((x = 34), (P = 34))
          : h
              ? ((x = 50), (P = 50))
              : m
                  ? ((x = 75), (P = 75))
                  : g
                      ? ((x = 150), (P = 150))
                      : x || P
                          ? x ? P || (P = x) : (x = P)
                          : ((x = 34), (P = 34));
        var E = x / 2, I = x / 2, _ = n || r ? s.TouchableOpacity : s.View;
        t && (_ = t);
        var j = s.StyleSheet.create({
          container: {
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            backgroundColor: 'transparent',
          },
          avatar: { width: x, height: P },
          overlayContainer: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
            alignSelf: 'stretch',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: x,
            height: P,
          },
          title: {
            color: '#ffffff',
            fontSize: E,
            backgroundColor: 'rgba(0,0,0,0)',
            textAlign: 'center',
          },
        });
        return c.default.createElement(
          _,
          a(
            {
              onPress: n,
              onLongPress: r,
              activeOpacity: O,
              style: [j.container, i && i],
            },
            C
          ),
          c.default.createElement(
            s.View,
            {
              style: [j.overlayContainer, v && { borderRadius: x / 2 }, T && T],
            },
            (function() {
              return d
                ? c.default.createElement(s.Image, {
                    style: [j.avatar, v && { borderRadius: x / 2 }, b && b],
                    source: d,
                  })
                : S
                    ? c.default.createElement(
                        y.default,
                        { style: [j.title, w && w] },
                        S
                      )
                    : l
                        ? c.default.createElement(f.default, {
                            style: u && u,
                            color: l.color || 'white',
                            name: l.name || 'user',
                            size: l.size || I,
                            type: l.type && l.type,
                          })
                        : void 0;
            })()
          )
        );
      };
    (h.propTypes = {
      component: l.default.func,
      width: l.default.number,
      height: l.default.number,
      onPress: l.default.func,
      onLongPress: l.default.func,
      containerStyle: l.default.any,
      source: s.Image.propTypes.source,
      avatarStyle: l.default.any,
      rounded: l.default.bool,
      title: l.default.string,
      titleStyle: s.Text.propTypes.style,
      overlayContainerStyle: l.default.any,
      activeOpacity: l.default.number,
      icon: l.default.object,
      iconStyle: s.Text.propTypes.style,
      small: l.default.bool,
      medium: l.default.bool,
      large: l.default.bool,
      xlarge: l.default.bool,
    }), (t.default = h);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(3),
      f = r(d),
      p = n(4),
      y = r(p),
      h = n(5),
      m = r(h),
      g = function(e) {
        var t = e.component,
          n = e.buttons,
          r = e.onPress,
          i = e.selectedIndex,
          l = e.containerStyle,
          u = e.innerBorderStyle,
          d = e.lastBorderStyle,
          p = e.buttonStyle,
          h = e.textStyle,
          m = e.selectedTextStyle,
          g = e.selectedBackgroundColor,
          v = e.underlayColor,
          S = e.activeOpacity,
          w = e.onHideUnderlay,
          T = e.onShowUnderlay,
          O = e.setOpacityTo,
          C = e.containerBorderRadius,
          x = o(e, [
            'component',
            'buttons',
            'onPress',
            'selectedIndex',
            'containerStyle',
            'innerBorderStyle',
            'lastBorderStyle',
            'buttonStyle',
            'textStyle',
            'selectedTextStyle',
            'selectedBackgroundColor',
            'underlayColor',
            'activeOpacity',
            'onHideUnderlay',
            'onShowUnderlay',
            'setOpacityTo',
            'containerBorderRadius',
          ]),
          P = t || s.TouchableHighlight;
        return c.default.createElement(
          s.View,
          a({ style: [b.container, l && l] }, x),
          n.map(function(e, t) {
            return c.default.createElement(
              P,
              {
                activeOpacity: S,
                setOpacityTo: O,
                onHideUnderlay: w,
                onShowUnderlay: T,
                underlayColor: v || '#ffffff',
                onPress: r
                  ? function() {
                      return r(t);
                    }
                  : function() {},
                key: t,
                style: [
                  b.button,
                  t < n.length - 1 && {
                    borderRightWidth: (u && u.width) || 1,
                    borderRightColor: (u && u.color) || f.default.grey4,
                  },
                  t === n.length - 1 &&
                    a({}, d, {
                      borderTopRightRadius: C || 0,
                      borderBottomRightRadius: C || 0,
                    }),
                  0 === t && {
                    borderTopLeftRadius: C || 0,
                    borderBottomLeftRadius: C || 0,
                  },
                  i === t && { backgroundColor: g || 'white' },
                ],
              },
              c.default.createElement(
                s.View,
                { style: [b.textContainer, p && p] },
                e.element
                  ? c.default.createElement(e.element, null)
                  : c.default.createElement(
                      y.default,
                      {
                        style: [
                          b.buttonText,
                          h && h,
                          i === t && { color: f.default.grey1 },
                          i === t && m,
                        ],
                      },
                      e
                    )
              )
            );
          })
        );
      },
      b = s.StyleSheet.create({
        button: { flex: 1 },
        textContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        container: {
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
          marginTop: 5,
          borderColor: '#e3e3e3',
          borderWidth: 1,
          flexDirection: 'row',
          borderRadius: 3,
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          height: 40,
        },
        buttonText: a(
          { fontSize: (0, m.default)(13), color: f.default.grey2 },
          s.Platform.select({ ios: { fontWeight: '500' } })
        ),
      });
    (g.propTypes = {
      button: l.default.object,
      component: l.default.any,
      onPress: l.default.func,
      buttons: l.default.array,
      containerStyle: s.View.propTypes.style,
      textStyle: s.Text.propTypes.style,
      selectedTextStyle: s.Text.propTypes.style,
      underlayColor: l.default.string,
      selectedIndex: l.default.number,
      activeOpacity: l.default.number,
      onHideUnderlay: l.default.func,
      onShowUnderlay: l.default.func,
      setOpacityTo: l.default.any,
      innerBorderStyle: l.default.shape({
        color: l.default.string,
        width: l.default.number,
      }),
      lastBorderStyle: l.default.oneOfType([
        s.View.propTypes.style,
        s.Text.propTypes.style,
      ]),
      buttonStyle: s.View.propTypes.style,
      selectedBackgroundColor: l.default.string,
      containerBorderRadius: l.default.number,
    }), (t.default = g);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(4),
      f = r(d),
      p = n(6),
      y = r(p),
      h = n(3),
      m = r(h),
      g = n(12),
      b = r(g),
      v = n(9),
      S = r(v),
      w = function(e) {
        var t = e.component,
          n = e.checked,
          r = e.iconRight,
          i = e.title,
          l = e.center,
          u = e.right,
          d = e.containerStyle,
          p = e.textStyle,
          y = e.onIconPress,
          h = e.onLongIconPress,
          m = e.checkedIcon,
          g = e.uncheckedIcon,
          v = e.iconType,
          w = e.checkedColor,
          O = e.uncheckedColor,
          C = e.checkedTitle,
          x = e.fontFamily,
          P = o(e, [
            'component',
            'checked',
            'iconRight',
            'title',
            'center',
            'right',
            'containerStyle',
            'textStyle',
            'onIconPress',
            'onLongIconPress',
            'checkedIcon',
            'uncheckedIcon',
            'iconType',
            'checkedColor',
            'uncheckedColor',
            'checkedTitle',
            'fontFamily',
          ]),
          E = b.default;
        v && (E = (0, S.default)(v));
        var I = t || s.TouchableOpacity, _ = g;
        return n && (_ = m), c.default.createElement(
          I,
          a({ style: [T.container, d && d] }, P),
          c.default.createElement(
            s.View,
            {
              style: [
                T.wrapper,
                u && { justifyContent: 'flex-end' },
                l && { justifyContent: 'center' },
              ],
            },
            !r &&
              c.default.createElement(E, {
                color: n ? w : O,
                name: _,
                size: 24,
                onLongPress: h,
                onPress: y,
              }),
            c.default.createElement(
              f.default,
              { style: [T.text, p && p, x && { fontFamily: x }] },
              n ? C || i : i
            ),
            r &&
              c.default.createElement(E, {
                color: n ? w : O,
                name: _,
                size: 24,
              })
          )
        );
      };
    (w.defaultProps = {
      checked: !1,
      iconRight: !1,
      right: !1,
      center: !1,
      checkedColor: 'green',
      uncheckedColor: '#bfbfbf',
      checkedIcon: 'check-square-o',
      uncheckedIcon: 'square-o',
    }), (w.propTypes = {
      component: l.default.any,
      checked: l.default.bool,
      iconRight: l.default.bool,
      title: l.default.string,
      center: l.default.bool,
      right: l.default.bool,
      containerStyle: s.View.propTypes.style,
      textStyle: s.Text.propTypes.style,
      checkedIcon: l.default.string,
      uncheckedIcon: l.default.string,
      iconType: l.default.string,
      checkedColor: l.default.string,
      uncheckedColor: l.default.string,
      checkedTitle: l.default.string,
      onIconPress: l.default.func,
      onLongIconPress: l.default.func,
      fontFamily: l.default.string,
    });
    var T = s.StyleSheet.create({
      wrapper: { flexDirection: 'row', alignItems: 'center' },
      container: {
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fafafa',
        borderColor: '#ededed',
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
      },
      text: a(
        { marginLeft: 10, marginRight: 10, color: m.default.grey1 },
        s.Platform.select({
          ios: { fontWeight: 'bold' },
          android: a({}, y.default.android.bold),
        })
      ),
    });
    t.default = w;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(6),
      f = r(d),
      p = n(3),
      y = r(p),
      h = n(4),
      m = r(h),
      g = n(16),
      b = r(g),
      v = n(5),
      S = r(v),
      w = function(e) {
        var t = e.children,
          n = e.flexDirection,
          r = e.containerStyle,
          i = e.wrapperStyle,
          l = e.imageWrapperStyle,
          u = e.title,
          d = e.titleStyle,
          f = e.featuredTitle,
          p = e.featuredTitleStyle,
          y = e.featuredSubtitle,
          h = e.featuredSubtitleStyle,
          g = e.dividerStyle,
          v = e.image,
          S = e.imageStyle,
          w = e.fontFamily,
          O = o(e, [
            'children',
            'flexDirection',
            'containerStyle',
            'wrapperStyle',
            'imageWrapperStyle',
            'title',
            'titleStyle',
            'featuredTitle',
            'featuredTitleStyle',
            'featuredSubtitle',
            'featuredSubtitleStyle',
            'dividerStyle',
            'image',
            'imageStyle',
            'fontFamily',
          ]);
        return c.default.createElement(
          s.View,
          a({ style: [T.container, v && { padding: 0 }, r && r] }, O),
          c.default.createElement(
            s.View,
            { style: [T.wrapper, i && i, n && { flexDirection: n }] },
            u &&
              c.default.createElement(
                s.View,
                null,
                c.default.createElement(
                  m.default,
                  {
                    style: [
                      T.cardTitle,
                      v && T.imageCardTitle,
                      d && d,
                      w && { fontFamily: w },
                    ],
                  },
                  u
                ),
                !v &&
                  c.default.createElement(b.default, {
                    style: [T.divider, g && g],
                  })
              ),
            v &&
              c.default.createElement(
                s.View,
                { style: l && l },
                c.default.createElement(
                  s.Image,
                  {
                    resizeMode: 'cover',
                    style: [{ width: null, height: 150 }, S && S],
                    source: v,
                  },
                  c.default.createElement(
                    s.View,
                    { style: T.overlayContainer },
                    f &&
                      c.default.createElement(
                        m.default,
                        { style: [T.featuredTitle, p && p] },
                        f
                      ),
                    y &&
                      c.default.createElement(
                        m.default,
                        { style: [T.featuredSubtitle, h && h] },
                        y
                      )
                  )
                ),
                c.default.createElement(
                  s.View,
                  { style: [{ padding: 10 }, i && i] },
                  t
                )
              ),
            !v && t
          )
        );
      };
    w.propTypes = {
      children: l.default.any,
      flexDirection: l.default.string,
      containerStyle: s.View.propTypes.style,
      wrapperStyle: s.View.propTypes.style,
      title: l.default.string,
      titleStyle: s.Text.propTypes.style,
      featuredTitle: l.default.string,
      featuredTitleStyle: m.default.propTypes.style,
      featuredSubtitle: l.default.string,
      featuredSubtitleStyle: m.default.propTypes.style,
      dividerStyle: s.View.propTypes.style,
      image: s.Image.propTypes.source,
      imageStyle: s.View.propTypes.style,
      imageWrapperStyle: s.View.propTypes.style,
      fontFamily: l.default.string,
    };
    var T = s.StyleSheet.create({
      container: a(
        {
          backgroundColor: 'white',
          borderColor: y.default.grey5,
          borderWidth: 1,
          padding: 15,
          margin: 15,
          marginBottom: 0,
        },
        s.Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .2)',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 1,
            shadowRadius: 1,
          },
          android: { elevation: 1 },
        })
      ),
      featuredTitle: a(
        { fontSize: (0, S.default)(18), marginBottom: 8, color: 'white' },
        s.Platform.select({
          ios: { fontWeight: '800' },
          android: a({}, f.default.android.black),
        })
      ),
      featuredSubtitle: a(
        { fontSize: (0, S.default)(13), marginBottom: 8, color: 'white' },
        s.Platform.select({
          ios: { fontWeight: '400' },
          android: a({}, f.default.android.black),
        })
      ),
      wrapper: { backgroundColor: 'transparent' },
      divider: { marginBottom: 15 },
      cardTitle: a(
        { fontSize: (0, S.default)(14) },
        s.Platform.select({
          ios: { fontWeight: 'bold' },
          android: a({}, f.default.android.black),
        }),
        { textAlign: 'center', marginBottom: 15, color: y.default.grey1 }
      ),
      imageCardTitle: { marginTop: 15 },
      overlayContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignSelf: 'stretch',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    });
    t.default = w;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function l(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      c = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable =
              r.enumerable || !1), (r.configurable = !0), 'value' in r &&
              (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      s = n(2),
      d = r(s),
      f = n(1),
      p = r(f),
      y = n(0),
      h = n(3),
      m = r(h),
      g = n(5),
      b = r(g),
      v = y.Dimensions.get('window'),
      S = v.width,
      w = (function(e) {
        function t() {
          return a(this, t), i(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          );
        }
        return l(t, e), c(t, [
          {
            key: 'focus',
            value: function() {
              var e = this.props.textInputRef;
              this.refs[e].focus();
            },
          },
          {
            key: 'blur',
            value: function() {
              var e = this.props.textInputRef;
              this.refs[e].blur();
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.containerStyle,
                n = e.inputStyle,
                r = e.textInputRef,
                a = e.containerRef,
                i = e.selectionColor,
                l = o(e, [
                  'containerStyle',
                  'inputStyle',
                  'textInputRef',
                  'containerRef',
                  'selectionColor',
                ]);
              return p.default.createElement(
                y.View,
                { ref: a, style: [T.container, t && t] },
                p.default.createElement(
                  y.TextInput,
                  u(
                    {
                      ref: r,
                      selectionColor: i || m.default.grey3,
                      style: [T.input, n && n],
                    },
                    l
                  )
                )
              );
            },
          },
        ]), t;
      })(f.Component);
    w.propTypes = {
      containerStyle: y.View.propTypes.style,
      inputStyle: y.Text.propTypes.style,
      selectionColor: d.default.string,
      textInputRef: d.default.string,
      containerRef: d.default.string,
    };
    var T = y.StyleSheet.create({
      container: u(
        { marginLeft: 15, marginRight: 15 },
        y.Platform.select({
          ios: {
            borderBottomColor: m.default.grey4,
            borderBottomWidth: 1,
            marginLeft: 20,
            marginRight: 20,
          },
        })
      ),
      input: u(
        {},
        y.Platform.select({ android: { height: 46 }, ios: { height: 36 } }),
        { width: S, color: m.default.grey3, fontSize: (0, b.default)(14) }
      ),
    });
    t.default = w;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(3),
      f = r(d),
      p = n(6),
      y = r(p),
      h = n(4),
      m = r(h),
      g = n(5),
      b = r(g),
      v = function(e) {
        var t = e.containerStyle,
          n = e.labelStyle,
          r = e.children,
          i = e.fontFamily,
          l = o(e, ['containerStyle', 'labelStyle', 'children', 'fontFamily']);
        return c.default.createElement(
          s.View,
          a({ style: [S.container, t && t] }, l),
          c.default.createElement(
            m.default,
            { style: [S.label, n && n, i && { fontFamily: i }] },
            r
          )
        );
      };
    v.propTypes = {
      containerStyle: s.View.propTypes.style,
      labelStyle: s.Text.propTypes.style,
      children: l.default.any,
      fontFamily: l.default.string,
    };
    var S = s.StyleSheet.create({
      container: {},
      label: a(
        {
          marginLeft: 20,
          marginRight: 20,
          marginTop: 15,
          marginBottom: 1,
          color: f.default.grey3,
          fontSize: (0, b.default)(12),
        },
        s.Platform.select({
          ios: { fontWeight: 'bold' },
          android: a({}, y.default.android.bold),
        })
      ),
    });
    t.default = v;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(3),
      f = r(d),
      p = n(4),
      y = r(p),
      h = n(5),
      m = r(h),
      g = function(e) {
        var t = e.containerStyle,
          n = e.labelStyle,
          r = e.children,
          i = e.fontFamily,
          l = o(e, ['containerStyle', 'labelStyle', 'children', 'fontFamily']);
        return c.default.createElement(
          s.View,
          a({ style: [b.container, t && t] }, l),
          c.default.createElement(
            y.default,
            { style: [b.label, n && n, i && { fontFamily: i }] },
            r
          )
        );
      };
    g.propTypes = {
      containerStyle: s.View.propTypes.style,
      labelStyle: s.Text.propTypes.style,
      children: l.default.any,
      fontFamily: l.default.string,
    };
    var b = s.StyleSheet.create({
      container: {},
      label: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 1,
        color: f.default.error,
        fontSize: (0, m.default)(12),
      },
    });
    t.default = g;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      a = n(2),
      i = r(a),
      l = n(1),
      u = r(l),
      c = n(0),
      s = function(e) {
        var t = e.containerStyle,
          n = e.size,
          r = e.onPress,
          a = e.activeOpacity,
          i = c.StyleSheet.create({
            container: {
              flex: n || (t && t.width ? 0 : 1),
              flexDirection: 'column',
            },
          });
        return r
          ? u.default.createElement(
              c.TouchableOpacity,
              { style: [i.container, t && t], activeOpacity: a, onPress: r },
              u.default.createElement(c.View, e, e.children)
            )
          : u.default.createElement(
              c.View,
              o({ style: [i.container, t && t] }, e),
              e.children
            );
      };
    (s.propTypes = {
      size: i.default.number,
      containerStyle: i.default.any,
      onPress: i.default.func,
      activeOpacity: i.default.number,
      children: i.default.any,
    }), (s.defaultProps = { activeOpacity: 1 }), (t.default = s);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function a(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      u = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable =
              r.enumerable || !1), (r.configurable = !0), 'value' in r &&
              (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      c = n(2),
      s = r(c),
      d = n(1),
      f = r(d),
      p = n(0),
      y = n(17),
      h = r(y),
      m = (function(e) {
        function t() {
          var e, n, r, i;
          o(this, t);
          for (var l = arguments.length, u = Array(l), c = 0; c < l; c++)
            u[c] = arguments[c];
          return (n = r = a(
            this,
            (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              e,
              [this].concat(u)
            )
          )), (r.styles = p.StyleSheet.create({
            container: { flex: 1, flexDirection: r.isRow() ? 'column' : 'row' },
          })), (i = n), a(r, i);
        }
        return i(t, e), u(t, [
          {
            key: 'isRow',
            value: function() {
              var e = !1;
              return f.default.Children.forEach(this.props.children, function(
                t
              ) {
                t && t.type === h.default && (e = !0);
              }), e;
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.onPress,
                n = e.activeOpacity,
                r = e.containerStyle;
              return t
                ? f.default.createElement(
                    p.TouchableOpacity,
                    { activeOpacity: n, onPress: t },
                    f.default.createElement(
                      p.View,
                      l({ style: [this.styles.container, r && r] }, this.props),
                      this.props.children
                    )
                  )
                : f.default.createElement(
                    p.View,
                    l({ style: [this.styles.container, r && r] }, this.props),
                    this.props.children
                  );
            },
          },
        ]), t;
      })(d.Component);
    (m.propTypes = {
      containerStyle: s.default.any,
      onPress: s.default.func,
      activeOpacity: s.default.number,
      children: s.default.any,
    }), (m.defaultProps = { activeOpacity: 1 }), (t.default = m);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function l(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      c = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable =
              r.enumerable || !1), (r.configurable = !0), 'value' in r &&
              (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      s = n(2),
      d = r(s),
      f = n(1),
      p = r(f),
      y = n(0),
      h = n(13),
      m = r(h),
      g = n(3),
      b = r(g),
      v = n(5),
      S = r(v),
      w = (function(e) {
        function t() {
          return a(this, t), i(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          );
        }
        return l(t, e), c(t, [
          {
            key: 'focus',
            value: function() {
              var e = this.props.textInputRef;
              this.refs[e].focus();
            },
          },
          {
            key: 'clearText',
            value: function() {
              var e = this.props.textInputRef;
              this.refs[e].clear();
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.containerStyle,
                n = e.inputStyle,
                r = e.icon,
                a = e.noIcon,
                i = e.lightTheme,
                l = e.round,
                c = e.showLoadingIcon,
                s = e.loadingIcon,
                d = e.clearIcon,
                f = e.containerRef,
                h = e.textInputRef,
                g = e.selectionColor,
                v = e.underlineColorAndroid,
                S = o(e, [
                  'containerStyle',
                  'inputStyle',
                  'icon',
                  'noIcon',
                  'lightTheme',
                  'round',
                  'showLoadingIcon',
                  'loadingIcon',
                  'clearIcon',
                  'containerRef',
                  'textInputRef',
                  'selectionColor',
                  'underlineColorAndroid',
                ]);
              return p.default.createElement(
                y.View,
                { ref: f, style: [T.container, i && T.containerLight, t && t] },
                p.default.createElement(
                  y.TextInput,
                  u(
                    {
                      ref: h,
                      selectionColor: g || b.default.grey3,
                      underlineColorAndroid: v || 'transparent',
                      style: [
                        T.input,
                        i && T.inputLight,
                        a && { paddingLeft: 9 },
                        l && {
                          borderRadius: 'ios' === y.Platform.OS ? 15 : 20,
                        },
                        n && n,
                      ],
                    },
                    S
                  )
                ),
                !a &&
                  p.default.createElement(m.default, {
                    size: 16,
                    style: [T.icon, r.style && r.style],
                    name: r.name || 'search',
                    color: r.color || b.default.grey3,
                  }),
                d &&
                  p.default.createElement(m.default, {
                    size: 16,
                    style: [T.clearIcon, d.style && d.style],
                    name: d.name || 'close',
                    onPress: this.clearText.bind(this),
                    color: d.color || b.default.grey3,
                  }),
                c &&
                  p.default.createElement(y.ActivityIndicator, {
                    style: [T.loadingIcon, s.style && s.style],
                    color: r.color || b.default.grey3,
                  })
              );
            },
          },
        ]), t;
      })(f.Component);
    (w.propTypes = {
      icon: d.default.object,
      noIcon: d.default.bool,
      lightTheme: d.default.bool,
      containerStyle: y.View.propTypes.style,
      inputStyle: y.Text.propTypes.style,
      round: d.default.bool,
      showLoadingIcon: d.default.bool,
      loadingIcon: d.default.object,
      clearIcon: d.default.oneOfType([d.default.object, d.default.bool]),
      textInputRef: d.default.string,
      containerRef: d.default.string,
      selectionColor: d.default.string,
      underlineColorAndroid: d.default.string,
    }), (w.defaultProps = {
      placeholderTextColor: b.default.grey3,
      lightTheme: !1,
      noIcon: !1,
      round: !1,
      icon: {},
      showLoadingIcon: !1,
      loadingIcon: {},
    });
    var T = y.StyleSheet.create({
      container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderTopColor: '#000',
        backgroundColor: b.default.grey0,
      },
      containerLight: {
        backgroundColor: b.default.grey5,
        borderTopColor: '#e1e1e1',
        borderBottomColor: '#e1e1e1',
      },
      icon: u(
        {
          backgroundColor: 'transparent',
          position: 'absolute',
          left: 16,
          top: 15.5,
        },
        y.Platform.select({ android: { top: 20 } })
      ),
      loadingIcon: u(
        {
          backgroundColor: 'transparent',
          position: 'absolute',
          right: 16,
          top: 13,
        },
        y.Platform.select({ android: { top: 17 } })
      ),
      input: u(
        {
          paddingLeft: 26,
          paddingRight: 19,
          margin: 8,
          borderRadius: 3,
          overflow: 'hidden',
          backgroundColor: b.default.searchBg,
          fontSize: (0, S.default)(14),
          color: b.default.grey3,
          height: 40,
        },
        y.Platform.select({ ios: { height: 30 }, android: { borderWidth: 0 } })
      ),
      inputLight: { backgroundColor: b.default.grey4 },
      clearIcon: u(
        {
          backgroundColor: 'transparent',
          position: 'absolute',
          right: 16,
          top: 15.5,
        },
        y.Platform.select({ android: { top: 17 } })
      ),
    });
    t.default = w;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(3),
      f = r(d),
      p = function(e) {
        var t = e.children,
          n = e.containerStyle,
          r = o(e, ['children', 'containerStyle']);
        return c.default.createElement(
          s.View,
          a({ style: [y.listContainer, n && n] }, r),
          t
        );
      };
    p.propTypes = {
      children: l.default.any,
      containerStyle: s.View.propTypes.style,
    };
    var y = s.StyleSheet.create({
      listContainer: {
        marginTop: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: f.default.greyOutline,
        backgroundColor: f.default.white,
      },
    });
    t.default = p;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(14),
      f = r(d),
      p = n(7),
      y = r(p),
      h = n(4),
      m = r(h),
      g = n(3),
      b = r(g),
      v = n(6),
      S = r(v),
      w = n(5),
      T = r(w),
      O = function(e) {
        var t = e.onPress,
          n = e.title,
          r = e.leftIcon,
          i = e.rightIcon,
          l = e.leftIconContainerStyle,
          u = e.avatarStyle,
          d = e.underlayColor,
          p = e.subtitle,
          h = e.subtitleStyle,
          g = e.containerStyle,
          v = e.wrapperStyle,
          S = e.titleStyle,
          w = e.titleContainerStyle,
          T = e.hideChevron,
          O = e.chevronColor,
          x = e.roundAvatar,
          P = e.component,
          E = e.fontFamily,
          I = e.rightTitle,
          _ = e.rightTitleContainerStyle,
          j = e.rightTitleStyle,
          k = e.subtitleContainerStyle,
          V = e.badge,
          R = e.label,
          z = e.onLongPress,
          M = e.switchButton,
          F = e.onSwitch,
          B = e.switchDisabled,
          L = e.switchOnTintColor,
          A = e.switchThumbTintColor,
          W = e.switchTintColor,
          D = e.switched,
          N = e.textInput,
          q = e.textInputAutoCapitalize,
          H = e.textInputAutoCorrect,
          U = e.textInputAutoFocus,
          K = e.textInputEditable,
          G = e.textInputKeyboardType,
          Y = e.textInputMaxLength,
          X = e.textInputMultiline,
          $ = e.textInputOnChangeText,
          J = e.textInputOnFocus,
          Z = e.textInputOnBlur,
          Q = e.textInputSelectTextOnFocus,
          ee = e.textInputReturnKeyType,
          te = e.textInputValue,
          ne = e.textInputStyle,
          re = e.textInputContainerStyle,
          oe = o(e, [
            'onPress',
            'title',
            'leftIcon',
            'rightIcon',
            'leftIconContainerStyle',
            'avatarStyle',
            'underlayColor',
            'subtitle',
            'subtitleStyle',
            'containerStyle',
            'wrapperStyle',
            'titleStyle',
            'titleContainerStyle',
            'hideChevron',
            'chevronColor',
            'roundAvatar',
            'component',
            'fontFamily',
            'rightTitle',
            'rightTitleContainerStyle',
            'rightTitleStyle',
            'subtitleContainerStyle',
            'badge',
            'label',
            'onLongPress',
            'switchButton',
            'onSwitch',
            'switchDisabled',
            'switchOnTintColor',
            'switchThumbTintColor',
            'switchTintColor',
            'switched',
            'textInput',
            'textInputAutoCapitalize',
            'textInputAutoCorrect',
            'textInputAutoFocus',
            'textInputEditable',
            'textInputKeyboardType',
            'textInputMaxLength',
            'textInputMultiline',
            'textInputOnChangeText',
            'textInputOnFocus',
            'textInputOnBlur',
            'textInputSelectTextOnFocus',
            'textInputReturnKeyType',
            'textInputValue',
            'textInputStyle',
            'textInputContainerStyle',
          ]),
          ae = e.avatar,
          ie = t || z ? s.TouchableHighlight : s.View;
        return P && (ie = P), 'string' == typeof ae &&
          (ae = { uri: ae }), c.default.createElement(
          ie,
          a(
            {
              onLongPress: z,
              onPress: t,
              underlayColor: d,
              style: [C.container, g && g],
            },
            oe
          ),
          c.default.createElement(
            s.View,
            { style: [C.wrapper, v && v] },
            r &&
              r.name &&
              c.default.createElement(
                s.View,
                { style: [C.iconStyle, l && l] },
                c.default.createElement(y.default, {
                  type: r.type,
                  iconStyle: [C.icon, r.style && r.style],
                  name: r.name,
                  color: r.color || b.default.grey4,
                  size: r.size || 24,
                })
              ),
            ae &&
              c.default.createElement(s.Image, {
                style: [C.avatar, x && { borderRadius: 17 }, u && u],
                source: ae,
              }),
            c.default.createElement(
              s.View,
              { style: C.titleSubtitleContainer },
              c.default.createElement(
                s.View,
                { style: w },
                !n || ('string' != typeof n && 'number' != typeof n)
                  ? c.default.createElement(s.View, null, n)
                  : c.default.createElement(
                      m.default,
                      {
                        style: [
                          C.title,
                          !r && { marginLeft: 10 },
                          S && S,
                          E && { fontFamily: E },
                        ],
                      },
                      n
                    )
              ),
              c.default.createElement(
                s.View,
                { style: k },
                !p || ('string' != typeof p && 'number' != typeof p)
                  ? c.default.createElement(s.View, null, p)
                  : c.default.createElement(
                      m.default,
                      {
                        style: [
                          C.subtitle,
                          !r && { marginLeft: 10 },
                          h && h,
                          E && { fontFamily: E },
                        ],
                      },
                      p
                    )
              )
            ),
            I &&
              '' !== I &&
              !N &&
              c.default.createElement(
                s.View,
                { style: [C.rightTitleContainer, _] },
                c.default.createElement(
                  m.default,
                  { style: [C.rightTitleStyle, j] },
                  I
                )
              ),
            N &&
              c.default.createElement(
                s.View,
                { style: [C.rightTitleContainer, re] },
                c.default.createElement(s.TextInput, {
                  style: [C.textInputStyle, ne],
                  defaultValue: I,
                  value: te,
                  autoCapitalize: q,
                  autoCorrect: H,
                  autoFocus: U,
                  editable: K,
                  keyboardType: G,
                  maxLength: Y,
                  multiline: X,
                  onChangeText: $,
                  onFocus: J,
                  onBlur: Z,
                  selectTextOnFocus: Q,
                  returnKeyType: ee,
                })
              ),
            !T &&
              c.default.createElement(
                s.View,
                { style: C.chevronContainer },
                c.default.createElement(y.default, {
                  type: i.type,
                  iconStyle: i.style,
                  size: 28,
                  name: i.name || 'chevron-right',
                  color: i.color || O,
                })
              ),
            M &&
              T &&
              c.default.createElement(
                s.View,
                { style: C.switchContainer },
                c.default.createElement(s.Switch, {
                  onValueChange: F,
                  disabled: B,
                  onTintColor: L,
                  thumbTintColor: A,
                  tintColor: W,
                  value: D,
                })
              ),
            V && !I && c.default.createElement(f.default, V),
            R && R
          )
        );
      };
    (O.defaultProps = {
      underlayColor: 'white',
      chevronColor: b.default.grey4,
      rightIcon: { name: 'chevron-right' },
      hideChevron: !1,
      roundAvatar: !1,
      switchButton: !1,
      textInputEditable: !0,
    }), (O.propTypes = {
      title: l.default.oneOfType([
        l.default.string,
        l.default.number,
        l.default.object,
      ]),
      avatar: l.default.any,
      icon: l.default.any,
      onPress: l.default.func,
      rightIcon: l.default.object,
      underlayColor: l.default.string,
      subtitle: l.default.oneOfType([
        l.default.string,
        l.default.number,
        l.default.object,
      ]),
      subtitleStyle: l.default.any,
      containerStyle: l.default.any,
      wrapperStyle: l.default.any,
      titleStyle: l.default.any,
      titleContainerStyle: l.default.any,
      hideChevron: l.default.bool,
      chevronColor: l.default.string,
      roundAvatar: l.default.bool,
      badge: l.default.any,
      switchButton: l.default.bool,
      onSwitch: l.default.func,
      switchDisabled: l.default.bool,
      switchOnTintColor: l.default.string,
      switchThumbTintColor: l.default.string,
      switchTintColor: l.default.string,
      switched: l.default.bool,
      textInput: l.default.bool,
      textInputAutoCapitalize: l.default.bool,
      textInputAutoCorrect: l.default.bool,
      textInputAutoFocus: l.default.bool,
      textInputEditable: l.default.bool,
      textInputKeyboardType: l.default.oneOf([
        'default',
        'email-address',
        'numeric',
        'phone-pad',
        'ascii-capable',
        'numbers-and-punctuation',
        'url',
        'number-pad',
        'name-phone-pad',
        'decimal-pad',
        'twitter',
        'web-search',
      ]),
      textInputMaxLength: l.default.number,
      textInputMultiline: l.default.bool,
      textInputOnChangeText: l.default.func,
      textInputOnFocus: l.default.func,
      textInputOnBlur: l.default.func,
      textInputSelectTextOnFocus: l.default.bool,
      textInputReturnKeyType: l.default.string,
      textInputValue: l.default.string,
      textInputStyle: l.default.any,
      textInputContainerStyle: l.default.any,
      component: l.default.any,
      fontFamily: l.default.string,
      rightTitle: l.default.string,
      rightTitleContainerStyle: s.View.propTypes.style,
      rightTitleStyle: m.default.propTypes.style,
      subtitleContainerStyle: s.View.propTypes.style,
      label: l.default.any,
      onLongPress: l.default.func,
      leftIcon: l.default.object,
      leftIconContainerStyle: s.View.propTypes.style,
      avatarStyle: s.View.propTypes.style,
    });
    var C = s.StyleSheet.create({
      avatar: { width: 34, height: 34 },
      container: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomColor: '#ededed',
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
      },
      wrapper: { flexDirection: 'row', marginLeft: 10 },
      iconStyle: { flex: 0.15, justifyContent: 'center', alignItems: 'center' },
      icon: { marginRight: 8 },
      title: { fontSize: (0, T.default)(14), color: b.default.grey1 },
      subtitle: a(
        { color: b.default.grey3, fontSize: (0, T.default)(12), marginTop: 1 },
        s.Platform.select({
          ios: { fontWeight: '600' },
          android: a({}, S.default.android.bold),
        })
      ),
      titleSubtitleContainer: { justifyContent: 'center', flex: 1 },
      chevronContainer: {
        flex: 0.15,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
      switchContainer: {
        flex: 0.15,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 5,
      },
      rightTitleContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
      rightTitleStyle: { marginRight: 5, color: b.default.grey4 },
      textInputStyle: { height: 20, textAlign: 'right' },
    });
    t.default = O;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(4),
      f = r(d),
      p = n(6),
      y = r(p),
      h = n(3),
      m = r(h),
      g = n(15),
      b = r(g),
      v = n(5),
      S = r(v),
      w = function(e) {
        var t = e.containerStyle,
          n = e.wrapperStyle,
          r = e.title,
          i = e.price,
          l = e.info,
          u = e.button,
          d = e.color,
          p = e.titleFont,
          y = e.pricingFont,
          h = e.infoFont,
          m = e.buttonFont,
          g = e.onButtonPress,
          v = o(e, [
            'containerStyle',
            'wrapperStyle',
            'title',
            'price',
            'info',
            'button',
            'color',
            'titleFont',
            'pricingFont',
            'infoFont',
            'buttonFont',
            'onButtonPress',
          ]);
        return c.default.createElement(
          s.View,
          a({ style: [T.container, t && t] }, v),
          c.default.createElement(
            s.View,
            { style: [T.wrapper, n && n] },
            c.default.createElement(
              f.default,
              { style: [T.pricingTitle, { color: d }, p && { fontFamily: p }] },
              r
            ),
            c.default.createElement(
              f.default,
              { style: [T.pricingPrice, y && { fontFamily: y }] },
              i
            ),
            l.map(function(e, t) {
              return c.default.createElement(
                f.default,
                { key: t, style: [T.pricingInfo, h && { fontFamily: h }] },
                e
              );
            }),
            c.default.createElement(b.default, {
              icon: { name: u.icon },
              buttonStyle: [T.button, u.buttonStyle, { backgroundColor: d }],
              fontFamily: m && m,
              title: u.title,
              onPress: g,
            })
          )
        );
      };
    (w.propTypes = {
      containerStyle: s.View.propTypes.style,
      wrapperStyle: s.View.propTypes.style,
      title: l.default.string,
      price: l.default.oneOfType([l.default.string, l.default.number]),
      info: l.default.array,
      button: l.default.object,
      color: l.default.string,
      onButtonPress: l.default.any,
      titleFont: l.default.string,
      pricingFont: l.default.string,
      infoFont: l.default.string,
      buttonFont: l.default.string,
    }), (w.defaultProps = { color: m.default.primary });
    var T = s.StyleSheet.create({
      container: a(
        {
          margin: 15,
          marginBottom: 15,
          backgroundColor: 'white',
          borderColor: m.default.grey5,
          borderWidth: 1,
          padding: 15,
        },
        s.Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .2)',
            shadowOffset: { height: 1, width: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 0.5,
          },
          android: { elevation: 1 },
        })
      ),
      wrapper: { backgroundColor: 'transparent' },
      pricingTitle: a(
        {
          textAlign: 'center',
          color: m.default.primary,
          fontSize: (0, S.default)(30),
        },
        s.Platform.select({
          ios: { fontWeight: '800' },
          android: a({}, y.default.android.black),
        })
      ),
      pricingPrice: a(
        {
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 10,
          fontSize: (0, S.default)(40),
        },
        s.Platform.select({
          ios: { fontWeight: '700' },
          android: a({}, y.default.android.bold),
        })
      ),
      pricingInfo: a(
        {
          textAlign: 'center',
          marginTop: 5,
          marginBottom: 5,
          color: m.default.grey3,
        },
        s.Platform.select({
          ios: { fontWeight: '600' },
          android: a({}, y.default.android.bold),
        })
      ),
      button: { marginTop: 15, marginBottom: 10 },
    });
    t.default = w;
  },
  function(e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(45),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = o.default;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function l(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    function u(e, t, n, r) {
      (this.x = e), (this.y = t), (this.width = n), (this.height = r);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var c =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      s = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable =
              r.enumerable || !1), (r.configurable = !0), 'value' in r &&
              (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      d = n(2),
      f = r(d),
      p = n(1),
      y = r(p),
      h = n(0),
      m = {
        spring: { friction: 7, tension: 100 },
        timing: {
          duration: 150,
          easing: h.Easing.inOut(h.Easing.ease),
          delay: 0,
        },
      };
    u.prototype.containsPoint = function(e, t) {
      return (
        e >= this.x &&
        t >= this.y &&
        e <= this.x + this.width &&
        t <= this.y + this.height
      );
    };
    var g = (function(e) {
      function t(e) {
        a(this, t);
        var n = i(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
        );
        return (n.state = {
          containerSize: { width: 0, height: 0 },
          trackSize: { width: 0, height: 0 },
          thumbSize: { width: 0, height: 0 },
          allMeasured: !1,
          value: new h.Animated.Value(e.value),
        }), n;
      }
      return l(t, e), s(t, [
        {
          key: 'componentWillMount',
          value: function() {
            this.panResponder = h.PanResponder.create({
              onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder.bind(
                this
              ),
              onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder.bind(
                this
              ),
              onPanResponderGrant: this.handlePanResponderGrant.bind(this),
              onPanResponderMove: this.handlePanResponderMove.bind(this),
              onPanResponderRelease: this.handlePanResponderEnd.bind(this),
              onPanResponderTerminationRequest: this.handlePanResponderRequestEnd.bind(
                this
              ),
              onPanResponderTerminate: this.handlePanResponderEnd.bind(this),
            });
          },
        },
        {
          key: 'componentWillReceiveProps',
          value: function(e) {
            var t = e.value;
            this.props.value !== t &&
              (this.props.animateTransitions
                ? this.setCurrentValueAnimated(t)
                : this.setCurrentValue(t));
          },
        },
        {
          key: 'setCurrentValue',
          value: function(e) {
            this.state.value.setValue(e);
          },
        },
        {
          key: 'setCurrentValueAnimated',
          value: function(e) {
            var t = this.props.animationType,
              n = c({}, m[t], this.props.animationConfig, { toValue: e });
            h.Animated[t](this.state.value, n).start();
          },
        },
        {
          key: 'handleMoveShouldSetPanResponder',
          value: function() {
            return !1;
          },
        },
        {
          key: 'handlePanResponderGrant',
          value: function() {
            (this._previousLeft = this.getThumbLeft(
              this.getCurrentValue()
            )), this.fireChangeEvent('onSlidingStart');
          },
        },
        {
          key: 'handlePanResponderMove',
          value: function(e, t) {
            this.props.disabled ||
              (this.setCurrentValue(this.getValue(t)), this.fireChangeEvent(
                'onValueChange'
              ));
          },
        },
        {
          key: 'handlePanResponderRequestEnd',
          value: function() {
            return !1;
          },
        },
        {
          key: 'handlePanResponderEnd',
          value: function(e, t) {
            this.props.disabled ||
              (this.setCurrentValue(this.getValue(t)), this.fireChangeEvent(
                'onSlidingComplete'
              ));
          },
        },
        {
          key: 'thumbHitTest',
          value: function(e) {
            var t = e.nativeEvent;
            return this.getThumbTouchRect().containsPoint(
              t.locationX,
              t.locationY
            );
          },
        },
        {
          key: 'handleStartShouldSetPanResponder',
          value: function(e) {
            return this.thumbHitTest(e);
          },
        },
        {
          key: 'fireChangeEvent',
          value: function(e) {
            this.props[e] && this.props[e](this.getCurrentValue());
          },
        },
        {
          key: 'getTouchOverflowSize',
          value: function() {
            var e = this.state, t = this.props, n = {};
            return !0 === e.allMeasured &&
              ((n.width = Math.max(
                0,
                t.thumbTouchSize.width - e.thumbSize.width
              )), (n.height = Math.max(
                0,
                t.thumbTouchSize.height - e.containerSize.height
              ))), n;
          },
        },
        {
          key: 'getTouchOverflowStyle',
          value: function() {
            var e = this.getTouchOverflowSize(),
              t = e.width,
              n = e.height,
              r = {};
            if (void 0 !== t && void 0 !== n) {
              var o = -n / 2;
              (r.marginTop = o), (r.marginBottom = o);
              var a = -t / 2;
              (r.marginLeft = a), (r.marginRight = a);
            }
            return !0 === this.props.debugTouchArea &&
              ((r.backgroundColor = 'orange'), (r.opacity = 0.5)), r;
          },
        },
        {
          key: 'handleMeasure',
          value: function(e, t) {
            var n = t.nativeEvent.layout,
              r = n.width,
              o = n.height,
              a = { width: r, height: o },
              i = '_' + e,
              l = this[i];
            (l && r === l.width && o === l.height) ||
              ((this[i] = a), this._containerSize &&
                this._trackSize &&
                this._thumbSize &&
                this.setState({
                  containerSize: this._containerSize,
                  trackSize: this._trackSize,
                  thumbSize: this._thumbSize,
                  allMeasured: !0,
                }));
          },
        },
        {
          key: 'measureContainer',
          value: function(e) {
            this.handleMeasure('containerSize', e);
          },
        },
        {
          key: 'measureTrack',
          value: function(e) {
            this.handleMeasure('trackSize', e);
          },
        },
        {
          key: 'measureThumb',
          value: function(e) {
            this.handleMeasure('thumbSize', e);
          },
        },
        {
          key: 'getValue',
          value: function(e) {
            var t = this.state.containerSize.width - this.state.thumbSize.width,
              n = this._previousLeft + e.dx,
              r = n / t;
            return this.props.step
              ? Math.max(
                  this.props.minimumValue,
                  Math.min(
                    this.props.maximumValue,
                    this.props.minimumValue +
                      Math.round(
                        r *
                          (this.props.maximumValue - this.props.minimumValue) /
                          this.props.step
                      ) *
                        this.props.step
                  )
                )
              : Math.max(
                  this.props.minimumValue,
                  Math.min(
                    this.props.maximumValue,
                    r * (this.props.maximumValue - this.props.minimumValue) +
                      this.props.minimumValue
                  )
                );
          },
        },
        {
          key: 'getCurrentValue',
          value: function() {
            return this.state.value.__getValue();
          },
        },
        {
          key: 'getRatio',
          value: function(e) {
            return (
              (e - this.props.minimumValue) /
              (this.props.maximumValue - this.props.minimumValue)
            );
          },
        },
        {
          key: 'getThumbLeft',
          value: function(e) {
            return (
              this.getRatio(e) *
              (this.state.containerSize.width - this.state.thumbSize.width)
            );
          },
        },
        {
          key: 'getThumbTouchRect',
          value: function() {
            var e = this.state, t = this.props, n = this.getTouchOverflowSize();
            return new u(
              n.width / 2 +
                this.getThumbLeft(this.getCurrentValue()) +
                (e.thumbSize.width - t.thumbTouchSize.width) / 2,
              n.height / 2 +
                (e.containerSize.height - t.thumbTouchSize.height) / 2,
              t.thumbTouchSize.width,
              t.thumbTouchSize.height
            );
          },
        },
        {
          key: 'renderDebugThumbTouchRect',
          value: function(e) {
            var t = this.getThumbTouchRect(),
              n = { left: e, top: t.y, width: t.width, height: t.height };
            return y.default.createElement(h.Animated.View, {
              style: n,
              pointerEvents: 'none',
            });
          },
        },
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.minimumValue,
              n = e.maximumValue,
              r = e.minimumTrackTintColor,
              a = e.maximumTrackTintColor,
              i = e.thumbTintColor,
              l = e.containerStyle,
              u = e.style,
              s = e.trackStyle,
              d = e.thumbStyle,
              f = e.debugTouchArea,
              p = o(e, [
                'minimumValue',
                'maximumValue',
                'minimumTrackTintColor',
                'maximumTrackTintColor',
                'thumbTintColor',
                'containerStyle',
                'style',
                'trackStyle',
                'thumbStyle',
                'debugTouchArea',
              ]),
              m = this.state,
              g = m.value,
              v = m.containerSize,
              S = m.trackSize,
              w = m.thumbSize,
              T = m.allMeasured,
              O = l || b,
              C = g.interpolate({
                inputRange: [t, n],
                outputRange: [0, v.width - w.width],
              }),
              x = {};
            T || (x.opacity = 0);
            var P = c(
              {
                position: 'absolute',
                width: h.Animated.add(C, w.width / 2),
                marginTop: -S.height,
                backgroundColor: r,
              },
              x
            ),
              E = this.getTouchOverflowStyle();
            return y.default.createElement(
              h.View,
              c({}, p, {
                style: [O.container, u],
                onLayout: this.measureContainer.bind(this),
              }),
              y.default.createElement(h.View, {
                style: [{ backgroundColor: a }, O.track, s],
                onLayout: this.measureTrack.bind(this),
              }),
              y.default.createElement(h.Animated.View, {
                style: [O.track, s, P],
              }),
              y.default.createElement(h.Animated.View, {
                onLayout: this.measureThumb.bind(this),
                style: [
                  { backgroundColor: i },
                  O.thumb,
                  d,
                  c(
                    {
                      transform: [
                        { translateX: C },
                        { translateY: -(S.height + w.height) / 2 },
                      ],
                    },
                    x
                  ),
                ],
              }),
              y.default.createElement(
                h.View,
                c({ style: [b.touchArea, E] }, this.panResponder.panHandlers),
                !0 === f && this.renderDebugThumbTouchRect(C)
              )
            );
          },
        },
      ]), t;
    })(p.Component);
    (t.default = g), (g.propTypes = {
      value: f.default.number,
      disabled: f.default.bool,
      minimumValue: f.default.number,
      maximumValue: f.default.number,
      step: f.default.number,
      minimumTrackTintColor: f.default.string,
      maximumTrackTintColor: f.default.string,
      thumbTintColor: f.default.string,
      thumbTouchSize: f.default.shape({
        width: f.default.number,
        height: f.default.number,
      }),
      onValueChange: f.default.func,
      onSlidingStart: f.default.func,
      onSlidingComplete: f.default.func,
      style: h.View.propTypes.style,
      trackStyle: h.View.propTypes.style,
      thumbStyle: h.View.propTypes.style,
      debugTouchArea: f.default.bool,
      animateTransitions: f.default.bool,
      animationType: f.default.oneOf(['spring', 'timing']),
      animationConfig: f.default.object,
      containerStyle: h.View.propTypes.style,
    }), (g.defaultProps = {
      value: 0,
      minimumValue: 0,
      maximumValue: 1,
      step: 0,
      minimumTrackTintColor: '#3f3f3f',
      maximumTrackTintColor: '#b3b3b3',
      thumbTintColor: 'red',
      thumbTouchSize: { width: 40, height: 40 },
      debugTouchArea: !1,
      animationType: 'timing',
    });
    var b = h.StyleSheet.create({
      container: { height: 40, justifyContent: 'center' },
      track: { height: 4, borderRadius: 2 },
      thumb: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 10,
        top: 22,
      },
      touchArea: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      debugThumbTouchArea: {
        position: 'absolute',
        backgroundColor: 'green',
        opacity: 0.5,
      },
    });
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function a(e, t, n) {
      return t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n), e;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i,
      l =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      u = n(2),
      c = r(u),
      s = n(1),
      d = r(s),
      f = n(0),
      p = n(12),
      y = r(p),
      h = n(4),
      m = r(h),
      g = n(6),
      b = r(g),
      v = function() {
        console.log('please attach method to this component');
      },
      S = ((i = { facebook: '#3b5998', twitter: '#00aced' }), a(
        i,
        'google-plus-official',
        '#dd4b39'
      ), a(i, 'pinterest', '#cb2027'), a(i, 'linkedin', '#007bb6'), a(
        i,
        'youtube',
        '#bb0000'
      ), a(i, 'vimeo', '#aad450'), a(i, 'tumblr', '#32506d'), a(
        i,
        'instagram',
        '#517fa4'
      ), a(i, 'quora', '#a82400'), a(i, 'foursquare', '#0072b1'), a(
        i,
        'wordpress',
        '#21759b'
      ), a(i, 'stumbleupon', '#EB4823'), a(i, 'github', '#000000'), a(
        i,
        'github-alt',
        '#000000'
      ), a(i, 'twitch', '#6441A5'), a(i, 'medium', '#02b875'), a(
        i,
        'soundcloud',
        '#f50'
      ), a(i, 'gitlab', '#e14329'), a(i, 'angellist', '#1c4082'), a(
        i,
        'codepen',
        '#000000'
      ), i),
      w = function(e) {
        var t = e.component,
          n = e.type,
          r = e.button,
          a = e.disabled,
          i = e.loading,
          u = e.activityIndicatorStyle,
          c = e.small,
          s = e.onPress,
          p = e.iconStyle,
          h = e.style,
          g = e.iconColor,
          b = e.title,
          w = e.raised,
          O = e.light,
          C = e.fontFamily,
          x = e.fontStyle,
          P = e.iconSize,
          E = e.onLongPress,
          I = e.fontWeight,
          _ = o(e, [
            'component',
            'type',
            'button',
            'disabled',
            'loading',
            'activityIndicatorStyle',
            'small',
            'onPress',
            'iconStyle',
            'style',
            'iconColor',
            'title',
            'raised',
            'light',
            'fontFamily',
            'fontStyle',
            'iconSize',
            'onLongPress',
            'fontWeight',
          ]),
          j = s || E ? t || f.TouchableHighlight : f.View,
          k = void 0;
        return i &&
          (k = d.default.createElement(f.ActivityIndicator, {
            animating: !0,
            style: [T.activityIndicatorStyle, u],
            color: g || 'white',
            size: (c && 'small') || 'large',
          })), d.default.createElement(
          j,
          l(
            {
              underlayColor: O ? 'white' : S[n],
              onLongPress: !a && (E || v),
              onPress: (!a || v) && (s || v),
              disabled: a || !1,
              style: [
                w && T.raised,
                T.container,
                r && T.button,
                !r && w && T.icon,
                !r &&
                !O &&
                !w && {
                  width: 2 * P + 4,
                  height: 2 * P + 4,
                  borderRadius: 2 * P,
                },
                { backgroundColor: S[n] },
                O && { backgroundColor: 'white' },
                h && h,
              ],
            },
            _
          ),
          d.default.createElement(
            f.View,
            { style: T.wrapper },
            d.default.createElement(y.default, {
              style: [p && p],
              color: O ? S[n] : g,
              name: n,
              size: P,
            }),
            r &&
              b &&
              d.default.createElement(
                m.default,
                {
                  style: [
                    T.title,
                    O && { color: S[n] },
                    C && { fontFamily: C },
                    I && { fontWeight: I },
                    x && x,
                  ],
                },
                b
              ),
            i && k
          )
        );
      };
    (w.propTypes = {
      component: c.default.element,
      type: c.default.string,
      button: c.default.bool,
      onPress: c.default.func,
      onLongPress: c.default.func,
      iconStyle: f.View.propTypes.style,
      style: f.View.propTypes.style,
      iconColor: c.default.string,
      title: c.default.string,
      raised: c.default.bool,
      disabled: c.default.bool,
      loading: c.default.bool,
      activityIndicatorStyle: f.View.propTypes.style,
      small: c.default.string,
      iconSize: c.default.oneOfType([c.default.string, c.default.number]),
      light: c.default.bool,
      fontWeight: c.default.string,
      fontStyle: f.View.propTypes.style,
      fontFamily: c.default.string,
    }), (w.defaultProps = {
      raised: !0,
      iconColor: 'white',
      iconSize: 24,
      button: !1,
    });
    var T = f.StyleSheet.create({
      container: {
        margin: 7,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: { paddingTop: 14, paddingBottom: 14 },
      raised: l(
        {},
        f.Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
          },
          android: { elevation: 2 },
        })
      ),
      wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: l(
        { color: 'white', marginLeft: 15 },
        f.Platform.select({
          ios: { fontWeight: 'bold' },
          android: l({}, b.default.android.black),
        })
      ),
      icon: { height: 52, width: 52 },
      activityIndicatorStyle: { marginHorizontal: 10, height: 0 },
    });
    t.default = w;
  },
  function(e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(20),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = o.default.Item;
  },
  function(e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = n(20),
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    t.default = o.default;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(4),
      f = r(d),
      p = n(7),
      y = r(p),
      h = n(41),
      m = r(h),
      g = function(e) {
        var t = e.featured,
          n = e.imageSrc,
          r = e.icon,
          i = e.title,
          l = e.children,
          u = e.caption,
          d = e.titleStyle,
          p = e.onPress,
          h = e.activeOpacity,
          g = e.overlayContainerStyle,
          b = e.captionStyle,
          v = e.iconContainerStyle,
          S = e.imageContainerStyle,
          w = e.containerStyle,
          T = e.contentContainerStyle,
          O = o(e, [
            'featured',
            'imageSrc',
            'icon',
            'title',
            'children',
            'caption',
            'titleStyle',
            'onPress',
            'activeOpacity',
            'overlayContainerStyle',
            'captionStyle',
            'iconContainerStyle',
            'imageContainerStyle',
            'containerStyle',
            'contentContainerStyle',
          ]),
          C = e.width,
          x = e.height;
        C || (C = s.Dimensions.get('window').width), x || (x = 0.8 * C);
        var P = s.StyleSheet.create({
          container: { width: C, height: x },
          imageContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            resizeMode: 'cover',
            backgroundColor: '#ffffff',
            flex: 2,
          },
          text: { backgroundColor: 'rgba(0,0,0,0)', marginBottom: 5 },
          contentContainer: {
            paddingTop: 15,
            paddingBottom: 5,
            paddingLeft: 15,
            paddingRight: 15,
          },
          iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          },
        });
        if (t) {
          var E = {
            title: i,
            icon: r,
            caption: u,
            imageSrc: n,
            onPress: p,
            activeOpacity: h,
            containerStyle: w,
            imageContainerStyle: S,
            overlayContainerStyle: g,
            titleStyle: d,
            captionStyle: b,
            width: C,
            height: x,
          };
          return c.default.createElement(m.default, E);
        }
        return c.default.createElement(
          s.TouchableOpacity,
          a({ style: [P.container, w && w] }, O),
          c.default.createElement(
            s.Image,
            { source: n, style: [P.imageContainer, S && S] },
            c.default.createElement(
              s.View,
              { style: [P.iconContainer, v && v] },
              r && c.default.createElement(y.default, r)
            )
          ),
          c.default.createElement(
            s.View,
            { style: [P.contentContainer, T && T] },
            c.default.createElement(
              f.default,
              { h4: !0, style: [P.text, d && d] },
              i
            ),
            l
          )
        );
      };
    (g.propTypes = {
      title: l.default.string,
      icon: l.default.object,
      caption: l.default.string,
      imageSrc: s.Image.propTypes.source.isRequired,
      onPress: l.default.func,
      activeOpacity: l.default.number,
      containerStyle: s.View.propTypes.style,
      imageContainerStyle: s.View.propTypes.style,
      iconContainerStyle: s.View.propTypes.style,
      overlayContainerStyle: s.View.propTypes.style,
      titleStyle: s.Text.propTypes.style,
      captionStyle: s.Text.propTypes.style,
      width: l.default.number,
      height: l.default.number,
      featured: l.default.bool,
      children: l.default.any,
      contentContainerStyle: s.View.propTypes.style,
    }), (t.default = g);
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = n(14),
      a = r(o),
      i = n(15),
      l = r(i),
      u = n(22),
      c = r(u),
      s = n(24),
      d = r(s),
      f = n(25),
      p = r(f),
      y = n(26),
      h = r(y),
      m = n(27),
      g = r(m),
      b = n(31),
      v = r(b),
      S = n(32),
      w = r(S),
      T = n(33),
      O = r(T),
      C = n(36),
      x = r(C),
      P = n(4),
      E = r(P),
      I = n(16),
      _ = r(I),
      j = n(34),
      k = r(j),
      V = n(23),
      R = r(V),
      z = n(30),
      M = r(z),
      F = n(7),
      B = r(F),
      L = n(38),
      A = r(L),
      W = n(37),
      D = r(W),
      N = n(3),
      q = r(N),
      H = n(9),
      U = r(H),
      K = n(5),
      G = r(K),
      Y = n(29),
      X = r(Y),
      $ = n(17),
      J = r($),
      Z = n(28),
      Q = r(Z),
      ee = n(39),
      te = r(ee),
      ne = n(35),
      re = r(ne),
      oe = n(21),
      ae = r(oe),
      ie = {
        Badge: a.default,
        Button: l.default,
        ButtonGroup: c.default,
        Card: d.default,
        FormInput: p.default,
        FormLabel: h.default,
        FormValidationMessage: g.default,
        List: v.default,
        ListItem: w.default,
        PricingCard: O.default,
        SocialIcon: x.default,
        Text: E.default,
        Divider: _.default,
        SideMenu: k.default,
        CheckBox: R.default,
        SearchBar: M.default,
        Icon: B.default,
        Tabs: A.default,
        Tab: D.default,
        colors: q.default,
        getIconType: U.default,
        normalize: G.default,
        Grid: X.default,
        Row: J.default,
        Col: Q.default,
        Tile: te.default,
        Slider: re.default,
        Avatar: ae.default,
      };
    e.exports = ie;
  },
  function(e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      var n = {};
      for (var r in e)
        t.indexOf(r) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      l = r(i),
      u = n(1),
      c = r(u),
      s = n(0),
      d = n(4),
      f = r(d),
      p = n(7),
      y = r(p),
      h = function(e) {
        var t = e.title,
          n = e.icon,
          r = e.caption,
          i = e.imageSrc,
          l = e.containerStyle,
          u = e.imageContainerStyle,
          d = e.overlayContainerStyle,
          p = e.iconContainerStyle,
          h = e.titleStyle,
          m = e.captionStyle,
          g = o(e, [
            'title',
            'icon',
            'caption',
            'imageSrc',
            'containerStyle',
            'imageContainerStyle',
            'overlayContainerStyle',
            'iconContainerStyle',
            'titleStyle',
            'captionStyle',
          ]),
          b = e.width,
          v = e.height;
        b || (b = s.Dimensions.get('window').width), v || (v = 0.8 * b);
        var S = s.StyleSheet.create({
          container: { width: b, height: v },
          imageContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            resizeMode: 'cover',
            backgroundColor: '#ffffff',
            width: b,
            height: v,
          },
          overlayContainer: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
            alignSelf: 'stretch',
            justifyContent: 'center',
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 45,
            paddingBottom: 40,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          text: {
            color: '#ffffff',
            backgroundColor: 'rgba(0,0,0,0)',
            marginBottom: 15,
            textAlign: 'center',
          },
          iconContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          },
        });
        return c.default.createElement(
          s.TouchableOpacity,
          a({ style: [S.container, l && l] }, g),
          c.default.createElement(
            s.Image,
            { source: i, style: [S.imageContainer, u && u] },
            c.default.createElement(
              s.View,
              { style: [S.overlayContainer, d && d] },
              c.default.createElement(
                s.View,
                { style: [S.iconContainer, p && p] },
                n && c.default.createElement(y.default, n)
              ),
              c.default.createElement(
                f.default,
                { h4: !0, style: [S.text, h && h] },
                t
              ),
              c.default.createElement(f.default, { style: [S.text, m && m] }, r)
            )
          )
        );
      };
    (h.propTypes = {
      title: l.default.string,
      icon: l.default.object,
      caption: l.default.string,
      imageSrc: s.Image.propTypes.source.isRequired,
      onPress: l.default.func,
      containerStyle: s.View.propTypes.style,
      iconContainerStyle: s.View.propTypes.style,
      imageContainerStyle: s.View.propTypes.style,
      overlayContainerStyle: s.View.propTypes.style,
      titleStyle: s.Text.propTypes.style,
      captionStyle: s.Text.propTypes.style,
      width: l.default.number,
      height: l.default.number,
    }), (t.default = h);
  },
  function(e, t, n) {
    'use strict';
    (function(t) {
      function r(e, n, r, u, c) {
        if ('production' !== t.env.NODE_ENV)
          for (var s in e)
            if (e.hasOwnProperty(s)) {
              var d;
              try {
                o(
                  'function' == typeof e[s],
                  '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.',
                  u || 'React class',
                  r,
                  s
                ), (d = e[s](n, s, u, r, null, i));
              } catch (e) {
                d = e;
              }
              if (
                (a(
                  !d || d instanceof Error,
                  '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                  u || 'React class',
                  r,
                  s,
                  typeof d
                ), d instanceof Error && !(d.message in l))
              ) {
                l[d.message] = !0;
                var f = c ? c() : '';
                a(!1, 'Failed %s type: %s%s', r, d.message, null != f ? f : '');
              }
            }
      }
      if ('production' !== t.env.NODE_ENV)
        var o = n(11), a = n(18), i = n(19), l = {};
      e.exports = r;
    }.call(t, n(8)));
  },
  function(e, t, n) {
    'use strict';
    var r = n(10), o = n(11);
    e.exports = function() {
      function e() {
        o(
          !1,
          'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
        );
      }
      function t() {
        return e;
      }
      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
      };
      return (n.checkPropTypes = r), (n.PropTypes = n), n;
    };
  },
  function(e, t, n) {
    'use strict';
    (function(t) {
      var r = n(10), o = n(11), a = n(18), i = n(19), l = n(42);
      e.exports = function(e, n) {
        function u(e) {
          var t = e && ((C && e[C]) || e[x]);
          if ('function' == typeof t) return t;
        }
        function c(e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t;
        }
        function s(e) {
          (this.message = e), (this.stack = '');
        }
        function d(e) {
          function r(r, c, d, f, p, y, h) {
            if (((f = f || P), (y = y || d), h !== i))
              if (n)
                o(
                  !1,
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                );
              else if (
                'production' !== t.env.NODE_ENV && 'undefined' != typeof console
              ) {
                var m = f + ':' + d;
                !l[m] &&
                  u < 3 &&
                  (a(
                    !1,
                    'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                    y,
                    f
                  ), (l[m] = !0), u++);
              }
            return null == c[d]
              ? r
                  ? new s(
                      null === c[d]
                        ? 'The ' +
                            p +
                            ' `' +
                            y +
                            '` is marked as required in `' +
                            f +
                            '`, but its value is `null`.'
                        : 'The ' +
                            p +
                            ' `' +
                            y +
                            '` is marked as required in `' +
                            f +
                            '`, but its value is `undefined`.'
                    )
                  : null
              : e(c, d, f, p, y);
          }
          if ('production' !== t.env.NODE_ENV) var l = {}, u = 0;
          var c = r.bind(null, !1);
          return (c.isRequired = r.bind(null, !0)), c;
        }
        function f(e) {
          function t(t, n, r, o, a, i) {
            var l = t[n];
            if (w(l) !== e)
              return new s(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  T(l) +
                  '` supplied to `' +
                  r +
                  '`, expected `' +
                  e +
                  '`.'
              );
            return null;
          }
          return d(t);
        }
        function p(e) {
          function t(t, n, r, o, a) {
            if ('function' != typeof e)
              return new s(
                'Property `' +
                  a +
                  '` of component `' +
                  r +
                  '` has invalid PropType notation inside arrayOf.'
              );
            var l = t[n];
            if (!Array.isArray(l)) {
              return new s(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  w(l) +
                  '` supplied to `' +
                  r +
                  '`, expected an array.'
              );
            }
            for (var u = 0; u < l.length; u++) {
              var c = e(l, u, r, o, a + '[' + u + ']', i);
              if (c instanceof Error) return c;
            }
            return null;
          }
          return d(t);
        }
        function y(e) {
          function t(t, n, r, o, a) {
            if (!(t[n] instanceof e)) {
              var i = e.name || P;
              return new s(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  O(t[n]) +
                  '` supplied to `' +
                  r +
                  '`, expected instance of `' +
                  i +
                  '`.'
              );
            }
            return null;
          }
          return d(t);
        }
        function h(e) {
          function n(t, n, r, o, a) {
            for (var i = t[n], l = 0; l < e.length; l++)
              if (c(i, e[l])) return null;
            return new s(
              'Invalid ' +
                o +
                ' `' +
                a +
                '` of value `' +
                i +
                '` supplied to `' +
                r +
                '`, expected one of ' +
                JSON.stringify(e) +
                '.'
            );
          }
          return Array.isArray(e)
            ? d(n)
            : ('production' !== t.env.NODE_ENV &&
                a(
                  !1,
                  'Invalid argument supplied to oneOf, expected an instance of array.'
                ), r.thatReturnsNull);
        }
        function m(e) {
          function t(t, n, r, o, a) {
            if ('function' != typeof e)
              return new s(
                'Property `' +
                  a +
                  '` of component `' +
                  r +
                  '` has invalid PropType notation inside objectOf.'
              );
            var l = t[n], u = w(l);
            if ('object' !== u)
              return new s(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  u +
                  '` supplied to `' +
                  r +
                  '`, expected an object.'
              );
            for (var c in l)
              if (l.hasOwnProperty(c)) {
                var d = e(l, c, r, o, a + '.' + c, i);
                if (d instanceof Error) return d;
              }
            return null;
          }
          return d(t);
        }
        function g(e) {
          function n(t, n, r, o, a) {
            for (var l = 0; l < e.length; l++) {
              if (null == (0, e[l])(t, n, r, o, a, i)) return null;
            }
            return new s(
              'Invalid ' + o + ' `' + a + '` supplied to `' + r + '`.'
            );
          }
          return Array.isArray(e)
            ? d(n)
            : ('production' !== t.env.NODE_ENV &&
                a(
                  !1,
                  'Invalid argument supplied to oneOfType, expected an instance of array.'
                ), r.thatReturnsNull);
        }
        function b(e) {
          function t(t, n, r, o, a) {
            var l = t[n], u = w(l);
            if ('object' !== u)
              return new s(
                'Invalid ' +
                  o +
                  ' `' +
                  a +
                  '` of type `' +
                  u +
                  '` supplied to `' +
                  r +
                  '`, expected `object`.'
              );
            for (var c in e) {
              var d = e[c];
              if (d) {
                var f = d(l, c, r, o, a + '.' + c, i);
                if (f) return f;
              }
            }
            return null;
          }
          return d(t);
        }
        function v(t) {
          switch (typeof t) {
            case 'number':
            case 'string':
            case 'undefined':
              return !0;
            case 'boolean':
              return !t;
            case 'object':
              if (Array.isArray(t)) return t.every(v);
              if (null === t || e(t)) return !0;
              var n = u(t);
              if (!n) return !1;
              var r, o = n.call(t);
              if (n !== t.entries) {
                for (; !(r = o.next()).done; )
                  if (!v(r.value)) return !1;
              } else
                for (; !(r = o.next()).done; ) {
                  var a = r.value;
                  if (a && !v(a[1])) return !1;
                }
              return !0;
            default:
              return !1;
          }
        }
        function S(e, t) {
          return (
            'symbol' === e ||
            ('Symbol' === t['@@toStringTag'] ||
              ('function' == typeof Symbol && t instanceof Symbol))
          );
        }
        function w(e) {
          var t = typeof e;
          return Array.isArray(e)
            ? 'array'
            : e instanceof RegExp ? 'object' : S(t, e) ? 'symbol' : t;
        }
        function T(e) {
          var t = w(e);
          if ('object' === t) {
            if (e instanceof Date) return 'date';
            if (e instanceof RegExp) return 'regexp';
          }
          return t;
        }
        function O(e) {
          return e.constructor && e.constructor.name ? e.constructor.name : P;
        }
        var C = 'function' == typeof Symbol && Symbol.iterator,
          x = '@@iterator',
          P = '<<anonymous>>',
          E = {
            array: f('array'),
            bool: f('boolean'),
            func: f('function'),
            number: f('number'),
            object: f('object'),
            string: f('string'),
            symbol: f('symbol'),
            any: (function() {
              return d(r.thatReturnsNull);
            })(),
            arrayOf: p,
            element: (function() {
              function t(t, n, r, o, a) {
                var i = t[n];
                if (!e(i)) {
                  return new s(
                    'Invalid ' +
                      o +
                      ' `' +
                      a +
                      '` of type `' +
                      w(i) +
                      '` supplied to `' +
                      r +
                      '`, expected a single ReactElement.'
                  );
                }
                return null;
              }
              return d(t);
            })(),
            instanceOf: y,
            node: (function() {
              function e(e, t, n, r, o) {
                return v(e[t])
                  ? null
                  : new s(
                      'Invalid ' +
                        r +
                        ' `' +
                        o +
                        '` supplied to `' +
                        n +
                        '`, expected a ReactNode.'
                    );
              }
              return d(e);
            })(),
            objectOf: m,
            oneOf: h,
            oneOfType: g,
            shape: b,
          };
        return (s.prototype =
          Error.prototype), (E.checkPropTypes = l), (E.PropTypes = E), E;
      };
    }.call(t, n(8)));
  },
  function(e, t) {
    e.exports = react - native - side - menu;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / Entypo;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / EvilIcons;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / Foundation;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / Ionicons;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / MaterialCommunityIcons;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / Octicons;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / SimpleLineIcons;
  },
  function(e, t) {
    e.exports = react - native - vector - icons / Zocial;
  },
]);
