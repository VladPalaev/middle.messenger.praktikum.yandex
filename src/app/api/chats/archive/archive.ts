import { HTTP } from "../../../../lib/core/HttpTransport";
import { ArchiveChatReqestData, ArchiveChatsResponse } from "./type";

const archiveInstance = new HTTP("/chats");

export class Archive {
	public get() {
		return archiveInstance.get("/archive");
	}

	public post(data: ArchiveChatReqestData) {
		return archiveInstance.post<
			ArchiveChatReqestData,
			ArchiveChatsResponse
		>("/archive", { data });
	}

	public unarchive(data: ArchiveChatReqestData) {
		return archiveInstance.post("/unarchive", { data });
	}
}
