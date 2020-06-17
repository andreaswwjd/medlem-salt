
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        { id: 'messid1', member_id: 'uuid1', message: encodeURI('Hej Andreas! Du får det här smset för att du är medlem i Salt. Det är vi jätteglada för! Att du är medlem gör att vi kan få bidrag, så vi kan göra grymma läger som Livskraft! 😉🥳\r\rDå till frågan: Vill du fortsätta att vara medlem i Salt ett år till? Svara då "JA" på detta sms! (Det är gratis! 💕)\r\rHälsningar - Vi på Salt'),
          direction: 'to', delivered: null, contains_approval: false, needs_validation: false, validated: false },
        { id: 'messid2', member_id: 'uuid1', message: encodeURI('Ja!'),
          direction: 'from', delivered: null, contains_approval: true, needs_validation: true, validated: false },
        { id: 'messid3', member_id: 'uuid1', message: encodeURI('Va roligt!😍🙌 Vi är så taggade på ett nytt år med Jesus! \r\rKort fråga: Stämmer den här infon om dig: \r\rAndreas Lundström (man född 1989)\rDragarbrunnsgatan 54\r75320 Uppsala\r\rSer någonting konstigt ut så följ gärna länken nedan eller prata med en ledare i din Salt-förening. \rhttp://saltmedlem.efs.nu/me/12Hu2se3fS84dD09'),
          direction: 'to', delivered: null, contains_approval: false, needs_validation: false, validated: false },
      ]);
    });
};
