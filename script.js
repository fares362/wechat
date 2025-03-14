document.getElementById('send').addEventListener('click', async () => {
    const input = document.getElementById('input').value;
    document.getElementById('output').innerText += `Vous: ${input}\n`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }]
        })
    });

    const data = await response.json();
    const botResponse = data.choices[0].message.content;
    document.getElementById('output').innerText += `Bot: ${botResponse}\n`;
    document.getElementById('input').value = '';
});
