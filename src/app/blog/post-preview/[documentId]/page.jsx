"use client"

import "../../../styles/index.scss";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import fetchBlogPostByDocumentId from "@/app/lib/fetchPostDocumentID";
import BlogContent from "./BlogContent";
import publishPostDocumentID from "@/app/lib/publishPostDocumentID";
import deletePostByDocumentId from "@/app/lib/deletePost";
import ConfirmationModal from "@/app/components/ConfirmationModal";
import "./post-preview.scss"

const DynamicBlogDetails = () => {
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [actionType, setActionType] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const params = useParams();
    const { documentId } = params;

    const handleStatusApprove = () => {
        setActionType('approve');
        setIsModalOpen(true);
    };

    const handleReject = () => {
        setActionType('delete');
        setIsModalOpen(true);
    };

    const confirmAction = async () => {
        try {
            if (actionType === 'approve') {
                const result = await publishPostDocumentID(documentId);
                console.log('Post publicado:', result);
                setSuccessMessage("Seu post foi aprovado com sucesso!");
            } else if (actionType === 'delete') {
                const result = await deletePostByDocumentId(documentId);
                console.log('Post deletado:', result);
                setSuccessMessage("O post foi deletado com sucesso!");
            }
            setIsModalOpen(false);

            if (actionType === 'approve' || actionType === 'delete') {
                setTimeout(() => {
                    setSuccessMessage("");
                }, 5000);
            }
        } catch (error) {
            console.error("Erro ao realizar a ação:", error);
        }
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const currentBlogPost = await fetchBlogPostByDocumentId(documentId);
                setBlog(currentBlogPost);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, [documentId]);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (!blog) {
        return <div>Post não encontrado</div>;
    }

    return (
        <>
            <header className="theme-main-menu sticky-menu border-bottom">
                <div className="inner-content position-relative">
                    <div className="d-flex align-items-center justify-content-end">
                        <div className="header-nova">
                            <button 
                                className="btn-header btn-approve"
                                onClick={handleStatusApprove}
                            >
                                Aprovar
                            </button>
                            <button 
                                className="btn btn-request"
                                onClick={() => window.open('https://forms.clickup.com/30905288/f/xf4y8-14257/MRGNWEE5U0SC1OWIEB', '_blank')}
                            >
                                Solicitar Alteração
                            </button>
                            <button 
                                className="btn btn-reject"
                                onClick={handleReject}
                            >
                                Rejeitar
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="blog-details-one mt-80 lg-mt-60">
                <div className="container">
                    <div className="border-bottom pb-130 lg-pb-60">
                        <div className="row gx-xl-5">
                            <div className="col-12">
                                <div className="blog-meta-wrapper pe-xxl-5 text-center">
                                    <article className="blog-details-content">
                                        {blog.cover && (
                                            <Image
                                                src={`https://blog-websites.bchat.lat${blog.cover.url}`}
                                                alt={blog.title}
                                                width={800}
                                                height={400}
                                                className="lazy-img image-meta w-100"
                                            />
                                        )}
                                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                                        <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                                        </div>
                                    </article>
                                    <BlogContent blog={blog} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ConfirmationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onConfirm={confirmAction} 
                message={actionType === 'approve' ? "Você tem certeza que deseja aprovar este post?" : "Você tem certeza que deseja rejeitar este post?"}
            />

            {successMessage && (
                <ConfirmationModal 
                    isOpen={!!successMessage} 
                    onClose={() => setSuccessMessage("")} 
                    onConfirm={() => setSuccessMessage("")} 
                    message={successMessage}
                    isSuccess={true}
                />
            )}
        </>
    );
};

export default DynamicBlogDetails;
