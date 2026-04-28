using catalogService as service from '../../srv/cat-service';
annotate service.employee with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Name',
                Value : Name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Depertment',
                Value : Depertment,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Role',
                Value : Role,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Location',
                Value : Location,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Salary',
                Value : Salary,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Contact',
                Value : Contact,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Age',
                Value : Age,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Name',
            Value : Name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Depertment',
            Value : Depertment,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Role',
            Value : Role,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Location',
            Value : Location,
        },
    ],
);

