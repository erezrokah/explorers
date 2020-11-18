const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { eager = [] } = JSON.parse(event.body);
  const count = eager.length || 0;

  // current status: https://media0.giphy.com/media/a2G83cq7gotnq/giphy-downsized-large.gif
  // await fetch(
  //   'https://hooks.slack.com/services/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',
  //   {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       text: `Cloudinary finished encoding ${count} video assets`,
  //     }),
  //   }
  // );

  return {
    statusCode: 200,
    body: 'Cloudinary eager_notification_url',
  };
};