const Header = () => {
    const tagHeader = document.createElement ('header');
    tagHeader.innerText = 'I am header';
    document.body.appendChild (tagHeader);
    return tagHeader;
};
Header();