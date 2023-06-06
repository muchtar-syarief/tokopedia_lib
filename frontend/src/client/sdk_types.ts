
export interface AkunListQuery {
	offset: number;
	limit: number;
	search: string;
}
export interface Pagination {
	offset: number;
	limit: number;
	count: number;
}
export interface AkunItem {
	limit_upload: number;
	count_upload: number;
	active_upload: boolean;
	lastup: number;
	in_upload: boolean;
	last_error: string;
	username: string;
	password: string;
	secret: string;
	markup: string;
	spin: string;
	collection: string;
	hastag: string;
	title_pattern: string;
}
export interface AkunListResponse {
	msg: string;
	error: string;
	data: AkunItem[];
	pagination: Pagination;
}
export interface BulkItem {
	username: string;
	password: string;
	secret: string;
}
export interface BulkPayload {
	data: BulkItem[];
}
export interface Response {
	msg: string;
	error: string;
}
export interface AkunUpdatePayload {
	data: AkunItem[];
}

export interface AkunDeletePayload {
	usernames: string[];
}

export interface UploadAppStatus {
	status: string;
	akun_count: number;
	count_upload: number;
	limit_upload: number;
}

export interface SettingSpinResponse {
	data: Data
	errcode: number
	titlePool: TitlePool[]
}

export interface Data {
	smin: number
	smax: number
	merek_ins_t: boolean
	title: string
	desc: string
}

export interface TitlePool {
	name: string
	data: string
}

export type SdkConfig = {

	GetMarkupList: {
		method: "get"
		params: undefined
		payload: undefined
		response: {
			data: Array<string>,
			errcode: number
		}
		path: "api/listMarkup"
	}

	GetSpinList: {
		method: "get"
		params: undefined
		payload: undefined
		response: SettingSpinResponse
		path: "api/settingSpin"
	}

	GetTokopediaAkunList: {
		method: "get"
		params: AkunListQuery
		payload: undefined
		response: AkunListResponse
		path: "tokopedia/akun/list"
	},

	PostTokopediaAkunBulkAdd: {
		method: "post"
		params: undefined
		payload: BulkPayload
		response: Response
		path: "tokopedia/akun/bulk_add"
	},

	PostTokopediaAkunUpdate: {
		method: "post"
		params: undefined
		payload: AkunUpdatePayload
		response: Response
		path: "tokopedia/akun/update"
	},

	PostTokopediaAkunDelete: {
		method: "post"
		params: undefined
		payload: AkunDeletePayload
		response: Response
		path: "tokopedia/akun/delete"
	},

	GetTokopediaUploadStart: {
		method: "get"
		params: undefined
		payload: undefined
		response: Response
		path: "tokopedia/upload/start"
	},

	GetTokopediaUploadStop: {
		method: "get"
		params: undefined
		payload: undefined
		response: Response
		path: "tokopedia/upload/stop"
	},

	GetTokopediaUploadStatus: {
		method: "get"
		params: undefined
		payload: undefined
		response: UploadAppStatus
		path: "tokopedia/upload/status"
	}
}