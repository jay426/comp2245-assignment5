$(document).ready(() => {
    const lookupBtn = $('#lookup');
    const lookupCitiesBtn = $('#lookupCities');

    lookupBtn.click(() => {
        const input = $('#country').val();
        $.ajax(`world.php?country=${input}`, {
            method: 'GET',
        }).done(response => $('#result').html(response))
            .fail(() => alert('There was a problem with the request.'));
    });

    lookupCitiesBtn.click(() => {
        const input = $('#country').val();
        $.ajax(`world.php?country=${input}&lookup=cities`, {
            method: 'GET',
        }).done(response => $('#result').html(response))
            .fail(() => alert('There was a problem with the request.'));
    });
});