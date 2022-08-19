import NaturaCO from '@app/assets/images/projects/natura.png'
import Clinica from '@app/assets/images/projects/clinica.png'
import Industria from '@app/assets/images/projects/industria.png'
import QualyTeam from '@app/assets/images/projects/qualyteam.png'

const PROJECTS_LOGO = {
    natura: NaturaCO,
    clinica: Clinica,
    industria: Industria,
    qualyteam: QualyTeam,
}

const projectsContentMocked = {
    ptBR: [
        {
            image: PROJECTS_LOGO.natura,
            title: 'NaturaCO',
            description: 'lorem natura',
        },
        {
            image: PROJECTS_LOGO.qualyteam,
            title: 'QualyTeam',
            description: 'lorem qualyteam',
        },
        {
            image: PROJECTS_LOGO.clinica,
            title: 'Clínica',
            description: 'lorem clinica',
        },
        {
            image: PROJECTS_LOGO.industria,
            title: 'Industria',
            description: 'lorem industria',
        },
    ],
    enGB: [
        {
            image: PROJECTS_LOGO.natura,
            title: 'NaturaCO',
            description: 'lorem natura',
        },
        {
            image: PROJECTS_LOGO.qualyteam,
            title: 'QualyTeam',
            description: 'lorem qualyteam',
        },
        {
            image: PROJECTS_LOGO.clinica,
            title: 'Clínica',
            description: 'lorem clinica',
        },
        {
            image: PROJECTS_LOGO.industria,
            title: 'Industria',
            description: 'lorem industria',
        },
    ],
}

export default projectsContentMocked
