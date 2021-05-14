import React from 'react';

import NotFound from '../Pages/404';
import Generate from '../Pages/Generate';
import GenerateDataSets from '../Pages/Generate/DataSets';
import GenerateRandomNumbers from '../Pages/Generate/RandomNumbers';
import GenerateUniqueIdentifiers from '../Pages/Generate/UniqueIdentifiers';
import Home from '../Pages/Home';
import JSON from '../Pages/JSON';
import JSONDiffProperties from '../Pages/JSON/DiffProperties';
import String from '../Pages/String';
import StringRemoveWhitespace from '../Pages/String/RemoveWhitespace';
import StringCountCharacters from '../Pages/String/CountCharacters';

// TODO add function that returns formatted array for rendering the links

type Route = {
    path: string;
    friendlyName: string;
    component: React.ComponentType<any>;
    exact?: boolean;
};

const routes: Route[] = [
    {
        path: '/',
        friendlyName: 'Home',
        component: Home,
        exact: true
    },
    {
        path: '/json',
        friendlyName: 'JSON',
        component: JSON,
        exact: true
    },
    {
        path: '/json/diff-properties',
        friendlyName: 'Diff Properties',
        component: JSONDiffProperties,
        exact: true
    },
    {
        path: '/string',
        friendlyName: 'String',
        component: String,
        exact: true
    },
    {
        path: '/string/remove-whitespace',
        friendlyName: 'Remove Whitespace',
        component: StringRemoveWhitespace,
        exact: true
    },
    {
        path: '/string/count-characters',
        friendlyName: 'Count Characters',
        component: StringCountCharacters,
        exact: true
    },
    {
        path: '/generate',
        friendlyName: 'Generate',
        component: Generate,
        exact: true
    },
    {
        path: '/generate/data-sets',
        friendlyName: 'Data Sets',
        component: GenerateDataSets,
        exact: true
    },
    {
        path: '/generate/random-numbers',
        friendlyName: 'Random Numbers',
        component: GenerateRandomNumbers,
        exact: true
    },
    {
        path: '/generate/unique-identifiers',
        friendlyName: 'Unique Identifiers',
        component: GenerateUniqueIdentifiers,
        exact: true
    },
    {
        path: '*',
        friendlyName: 'Not Found',
        component: NotFound
    }
];

export default routes;
