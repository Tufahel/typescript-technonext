{
    // Union type -> Or

    /* type FrontendDeveloper = 'fakibaj' | 'junior';

    type FullstackDeveloper = 'frontend' | 'expert';

    const fulllstackDeveloper : FullstackDeveloper = 'frontend'; */


    // Intersection type -> and
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'frontend'
    };

    type BackendDeveloper = {
        skills: string[];
        designation2: 'backend'
    };

    type FullstackDeveloper = BackendDeveloper & FrontendDeveloper;

    const fulllstackDeveloper : FullstackDeveloper = {
        skills: ['a', 'b'],
        designation1: 'frontend',
        designation2: 'backend',
    }
}