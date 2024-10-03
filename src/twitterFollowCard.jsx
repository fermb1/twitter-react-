function TwitterFollowCard({ children, username }) {
    let isFollowing = false;

    const card = document.createElement('article');
    card.className = 'tw-followCard';

    const header = document.createElement('header');
    header.className = 'tw-followCard-header';

    const avatar = document.createElement('img');
    avatar.className = 'tw-followCard-avatar';
    avatar.src = `https://unavatar.io/${username}`;
    avatar.alt = `el avatar de ${username}`;

    const info = document.createElement('div');
    info.className = 'tw-followCard-info';

    const name = document.createElement('strong');
    name.textContent = children;

    const span = document.createElement('span');
    span.className = 'tw-followCard-span';
    span.textContent = `@${username}`;

    info.appendChild(name);
    info.appendChild(span);

    header.appendChild(avatar);
    header.appendChild(info);

    const aside = document.createElement('aside');

    const button = document.createElement('button');
    button.className = 'tw-followCard-button';
    button.textContent = 'seguir';

    button.addEventListener('click', () => {
        isFollowing = !isFollowing;
        button.textContent = isFollowing ? 'siguiendo' : 'seguir';
        button.className = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    });

    aside.appendChild(button);

    card.appendChild(header);
    card.appendChild(aside);

    return card;
}

// Ejemplo de uso
const container = document.getElementById('app');
const followCard = TwitterFollowCard({ children: 'Midudev', username: 'midudev' });
container.appendChild(followCard);