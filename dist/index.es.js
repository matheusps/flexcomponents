import { createContext, useContext, createElement } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Context = createContext(null);

var useTheme = function () {
    var theme = useContext(Context);
    return !!theme ? theme : { container: {}, item: {} };
};

var FlexContainer = function (_a) {
    var children = _a.children, themed = _a.themed, props = __rest(_a, ["children", "themed"]);
    var container = useTheme().container;
    var styles = themed ? container : {};
    return (createElement("div", { style: __assign({ order: props.order, flexShrink: props.shrink, flexGrow: props.grow, flexBasis: props.basis, alignSelf: props.self, display: props.inline ? 'inline-flex' : 'flex', flexDirection: props.direction, flexWrap: props.wrap, justifyContent: props.justify, alignItems: props.items, alignContent: props.content }, styles) }, children));
};
FlexContainer.defaultProps = {
    themed: true,
    order: 0,
    shrink: 1,
    grow: 0,
    self: 'auto',
    basis: 'auto',
    inline: false,
    direction: 'row',
    wrap: 'nowrap',
    justify: 'flex-start',
    items: 'stretch',
    content: 'stretch'
};

var FlexItem = function (_a) {
    var children = _a.children, themed = _a.themed, props = __rest(_a, ["children", "themed"]);
    var item = useTheme().item;
    var styles = themed ? item : {};
    return (createElement("div", { style: __assign({ display: 'flex', order: props.order, flexShrink: props.shrink, flexGrow: props.grow, flexBasis: props.basis, alignSelf: props.self }, styles) }, children));
};
FlexItem.defaultProps = {
    themed: true,
    order: 0,
    shrink: 1,
    grow: 0,
    self: 'auto',
    basis: 'auto'
};

var ModernWhite = {
    container: {
        backgroundColor: '#FFFFFF',
        color: '#212436',
        boxShadow: '0 0.125rem 0.8rem 0 rgba(33, 36, 54, 0.15)',
        borderRadius: '1rem',
        margin: '0rem',
        padding: '1rem'
    },
    item: {
        backgroundColor: '#FFFFFF',
        color: '#212436',
        boxShadow: '0 0.125rem 0.8rem 0 rgba(33, 36, 54, 0.15)',
        borderRadius: '1rem',
        margin: '1rem',
        padding: '1rem'
    }
};

var ThemeProvider = function (_a) {
    var theme = _a.theme, children = _a.children;
    return (createElement(Context.Provider, { value: theme }, children));
};
ThemeProvider.defaultProps = {
    theme: ModernWhite
};

export { FlexContainer, FlexItem, ThemeProvider, useTheme };
//# sourceMappingURL=index.es.js.map
