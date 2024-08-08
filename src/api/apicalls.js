import {
  ALLCLIENTS,
  CLIENT,
  ALLBILLERS,
  ALLCLIENTBILLERS,
  ALLWALLETS,
  ALLWALLETHISTORY,
  ALLTRANSACTION,
  BILLERCATEGORY,
  BILLERSUBCATEGORY,
  BILLER,
  CLIENTBILLER,
  ALLELECTRICITY,
  GENERATEKEY,
  DASHBOARDTRANSACTIONS,
  BILLERCOUNT,
  EXPORTTRANSACTION,
  REGISTERUSER,
  AIRTIME,
  ALLUSERMANAGEMENT,
} from "../utils/config";

import { apiGet, apiPost, apiPut, apiGetCSV } from "../utils/utils";

export function getTransactions(data = null) {
  return apiGet(ALLTRANSACTION, data);
}
export function getWallets(data = null) {
  return apiGet(ALLWALLETS, data);
}
// export function getBillers(data = null) {
//   return apiGet(BILLER, data);
// }
export function getBillersCount(data = null) {
  return apiGet(BILLERCOUNT, data);
}
export function exportTransactions(data) {
  return apiGetCSV(EXPORTTRANSACTION, data);
}
export function getBillers(data = null) {
  return apiGet(ALLBILLERS, data);
}
export function getDashboardTransaction(data = null){
  return apiGet (DASHBOARDTRANSACTIONS, data);
}
