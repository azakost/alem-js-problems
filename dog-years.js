function dogYears(planet, sec) {
    const planets = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    }
    var years = (sec / (planets[planet] * 365.25 * 24 * 3600))*7;
    return Math.round(years*100) / 100;
}
