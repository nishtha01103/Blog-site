function isActiveRoute(route, currentRoute) {
    return route=== currentRoute ? 'active' : '';
}

export { isActiveRoute };
// This function checks if the given route matches the current route and returns 'active' if it does, otherwise returns an empty string.
// It can be used to highlight the active navigation link in a web application.