import {AccountingConsultingSvg, AccountingSvg, CustomerRelationshipSvg, DataMiningSvg, FinancialModellingSvg, FinancialSystemsSvg, HRSvg, IFRS16Svg, IFRSTrainingSvg, MoreSvg, OutsourcingSvg, TaxSvg} from '../../assets/svgs/ServicesSVGs'
  
export const IconEnumeration = {
    accounting: 'accounting',
    tax: 'tax',
    financialModelling: 'financialModeling',
    outsourcing: 'outsourcing',
    financialSystems: 'financialSystems',
    hr: 'hr',
    financialStatesments: 'financialStatesments',
    ifrs16: 'ifrs16',
    IFRSTraining: 'IFRSTraining',
    AccountingConsulting: 'AccountingConsulting',
    CustomerRelationship: 'CustomerRelationship',
    DataMining: 'DataMining',
    More: 'More',





}
export function getIcon(icon) {
    return IconEnumertaionMapped[icon]
}

const IconEnumertaionMapped = {
    [IconEnumeration.accounting]: <AccountingSvg />,
    [IconEnumeration.tax]: <TaxSvg/>,
    [IconEnumeration.outsourcing]: <OutsourcingSvg/>,
    [IconEnumeration.financialSystems]: <FinancialSystemsSvg/>,
    [IconEnumeration.financialModelling]: <FinancialModellingSvg/>,
    [IconEnumeration.hr]: <HRSvg/>,
    [IconEnumeration.financialStatesments]: <FinancialSystemsSvg/>,
    [IconEnumeration.ifrs16]: <IFRS16Svg/>,
    [IconEnumeration.IFRSTraining]: <IFRSTrainingSvg/>,
    [IconEnumeration.AccountingConsulting]: <AccountingConsultingSvg/>,
    [IconEnumeration.CustomerRelationship]: <CustomerRelationshipSvg/>,
    [IconEnumeration.DataMining]: <DataMiningSvg/>,
    [IconEnumeration.More]: <MoreSvg/>,
     

}

