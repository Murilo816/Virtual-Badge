const linksSocialMedia = {
  github: 'Murilo816',
  youtube: '',
  facebook: '',
  instagram: '',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href =
      'https://www.' + social + '.com/' + linksSocialMedia[social]
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = 'https://api.github.com/users/' + linksSocialMedia.github

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const nameGithub = data.name
      userName.textContent = nameGithub

      const bioGithub = data.bio
      userBio.textContent = bioGithub

      const avatarGithub = data.avatar_url
      userAvatar.src = avatarGithub

      const linkNameGithub = data.login
      userGithubName.textContent = linkNameGithub

      const linkGithub = 'https://www.github.com/' + linksSocialMedia.github
      userGithub.href = linkGithub
    })
}

getGithubProfileInfos()

function setSiteName() {
  const url = 'https://api.github.com/users/' + linksSocialMedia.github

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const nameSiteTitle = data.name
      siteTitle.textContent = nameSiteTitle + ' - Crachá Virtual'
    })
}

setSiteName()
